#!/usr/bin/env python3

from __future__ import annotations

import argparse
import os
import re
from pathlib import Path, PurePosixPath


INLINE_LINK_RE = re.compile(r"(!?\[[^\]]*\]\()([^)]+)(\))")
REF_DEF_RE = re.compile(r"^(\s*\[[^\]]+\]:\s*)(\S+)(.*)$", re.MULTILINE)


def is_external_target(target: str) -> bool:
    if not target:
        return True
    if target.startswith(("#", "/", "//")):
        return True
    return bool(re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*:", target))


def split_target(target: str) -> tuple[str, str]:
    query_pos = target.find("?")
    anchor_pos = target.find("#")

    split_pos = len(target)
    if query_pos != -1:
        split_pos = min(split_pos, query_pos)
    if anchor_pos != -1:
        split_pos = min(split_pos, anchor_pos)

    return target[:split_pos], target[split_pos:]


def normalize_parts(path_part: str) -> list[str]:
    parts = list(PurePosixPath(path_part).parts)
    normalized: list[str] = []
    for part in parts:
        if part in ("", "."):
            continue
        normalized.append(part)
    return normalized


def strip_leading_dotdots(parts: list[str]) -> list[str]:
    stripped = list(parts)
    while stripped and stripped[0] == "..":
        stripped.pop(0)
    return stripped


def candidate_paths(path_part: str, techdocs_root: Path) -> list[Path]:
    analyses_root = techdocs_root / "analyses"
    analysis_root = techdocs_root / "analysis"

    parts = normalize_parts(path_part)
    stripped = strip_leading_dotdots(parts)

    candidates: list[Path] = []

    def add_candidate(candidate_parts: list[str], root: Path) -> None:
        if not candidate_parts:
            return
        candidates.append(root.joinpath(*candidate_parts))

    if stripped:
        add_candidate(stripped, techdocs_root)
        add_candidate(stripped, analyses_root)
        add_candidate(stripped, analysis_root)

    if "docs" in parts:
        idx = parts.index("docs")
        add_candidate(parts[idx + 1 :], techdocs_root)

    if "analyses" in parts:
        idx = parts.index("analyses")
        add_candidate(parts[idx + 1 :], analyses_root)

    if "analysis" in parts:
        idx = parts.index("analysis")
        add_candidate(parts[idx + 1 :], analysis_root)

    # De-duplicate while preserving order
    deduped: list[Path] = []
    seen: set[Path] = set()
    for candidate in candidates:
        if candidate in seen:
            continue
        deduped.append(candidate)
        seen.add(candidate)
    return deduped


def resolve_target(file_path: Path, target: str, techdocs_root: Path) -> tuple[str, bool]:
    if is_external_target(target):
        return target, False

    path_part, suffix = split_target(target)
    if not path_part:
        return target, False

    current_resolved = (file_path.parent / PurePosixPath(path_part)).resolve()
    if current_resolved.exists():
        return target, False

    for candidate in candidate_paths(path_part, techdocs_root):
        if candidate.exists():
            rel = os.path.relpath(candidate, start=file_path.parent)
            rel_posix = PurePosixPath(rel).as_posix()
            return f"{rel_posix}{suffix}", False

    return target, True


def normalize_file(file_path: Path, techdocs_root: Path) -> tuple[int, list[str]]:
    original = file_path.read_text(encoding="utf-8")
    changes = 0
    unresolved: list[str] = []

    def inline_replacer(match: re.Match[str]) -> str:
        nonlocal changes
        prefix, target, suffix = match.groups()
        fixed, is_unresolved = resolve_target(file_path, target, techdocs_root)
        if fixed != target:
            changes += 1
        elif is_unresolved:
            unresolved.append(target)
        return f"{prefix}{fixed}{suffix}"

    def ref_replacer(match: re.Match[str]) -> str:
        nonlocal changes
        prefix, target, suffix = match.groups()
        fixed, is_unresolved = resolve_target(file_path, target, techdocs_root)
        if fixed != target:
            changes += 1
        elif is_unresolved:
            unresolved.append(target)
        return f"{prefix}{fixed}{suffix}"

    updated = INLINE_LINK_RE.sub(inline_replacer, original)
    updated = REF_DEF_RE.sub(ref_replacer, updated)

    if updated != original:
        file_path.write_text(updated, encoding="utf-8")

    return changes, unresolved


def is_safe_markdown_file(file_path: Path, analyses_root: Path) -> bool:
    if file_path.is_symlink():
        return False
    try:
        resolved_file = file_path.resolve()
        try:
            return resolved_file.is_relative_to(analyses_root)
        except AttributeError:
            try:
                resolved_file.relative_to(analyses_root)
                return True
            except ValueError:
                return False
    except OSError:
        return False


def main() -> int:
    parser = argparse.ArgumentParser(description="Normalize broken links in synced analyses markdown files.")
    parser.add_argument("analyses_dir", type=Path)
    parser.add_argument("techdocs_root", type=Path)
    args = parser.parse_args()

    analyses_dir = args.analyses_dir.resolve()
    techdocs_root = args.techdocs_root.resolve()

    total_changes = 0
    file_count = 0
    unresolved_count = 0
    unresolved_examples: list[str] = []
    skipped_count = 0

    for markdown_file in analyses_dir.rglob("*.md"):
        if not is_safe_markdown_file(markdown_file, analyses_dir):
            skipped_count += 1
            continue
        file_count += 1
        rewritten, unresolved = normalize_file(markdown_file, techdocs_root)
        total_changes += rewritten
        if unresolved:
            unresolved_count += len(unresolved)
            unresolved_examples.extend([f"{markdown_file}: {target}" for target in unresolved[:3]])

    print(f"Normalized links in {file_count} markdown files; rewrote {total_changes} link(s).")
    if skipped_count:
        print(f"Skipped {skipped_count} unsafe markdown path(s) outside analyses root.")
    if unresolved_count:
        print(f"Found {unresolved_count} unresolved relative link(s).")
        for example in unresolved_examples[:10]:
            print(f"  - {example}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
