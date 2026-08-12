---
title: Switching Licenses and Copyright Notices
description: Guidance on copyright and license notices when migrating a project into CNCF
---

## Copyright notices

You do not need to remove or rewrite existing copyright notices, and CNCF
does not require every contributor to add their own notice to every file.
Copyrights stay with the original authors — they are licensed for use by
the project, not transferred to CNCF.

If you want a simple, project-wide notice going forward, CNCF suggests a
generic form rather than listing individual names, for example:

- `Copyright The <Project> Authors.`
- `Copyright Contributors to the <Project> project.`

Keeping your original notice is also fine — this format is a
recommendation, not a requirement.

## License notices

Under the CNCF Charter, source code is licensed as Apache-2.0 and
documentation as CC-BY-4.0. Add a short license notice to each file, for
example using an SPDX identifier:

- Source code: `# SPDX-License-Identifier: Apache-2.0`
- Documentation: `<!-- SPDX-License-Identifier: CC-BY-4.0 -->`

If a file already carries a notice from its original license, keep that
notice rather than replacing it.

## Quick decision guide

- **New file, written for this project** — add the standard CNCF-style
  copyright and Apache-2.0/CC-BY-4.0 SPDX notice.
- **File reused as-is from another project** — keep its original notice.
- **File mixes new and reused content** — keep the original notice for the
  reused part, and add your own for the new part.

For full details, see CNCF's [copyright notices guidance](https://github.com/cncf/foundation/blob/main/copyright-notices.md)
and [license notices guidance](https://github.com/cncf/foundation/blob/main/license-notices.md).