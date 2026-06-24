/**
 * Ejected from @docusaurus/theme-classic BlogSidebar/Desktop and customised.
 *
 * Changes vs. upstream:
 *   - Each year is rendered as a native <details>/<summary> collapsible group.
 *   - The current calendar year (or any year containing the active post) starts
 *     expanded; all other years start collapsed.
 *   - A post-count badge is shown next to each year heading.
 *
 * Uses only public client APIs from @docusaurus/plugin-content-blog/client so
 * that re-ejecting on a theme upgrade is straightforward.
 *
 * When upgrading @docusaurus/theme-classic, re-run:
 *   npm run swizzle @docusaurus/theme-classic BlogSidebar/Desktop -- --eject
 * and re-apply the changes above.
 */

import React, {memo} from 'react';
import clsx from 'clsx';
import {translate} from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {isSamePath} from '@docusaurus/theme-common/internal';
import {
  useVisibleBlogSidebarItems,
  groupBlogSidebarItemsByYear,
} from '@docusaurus/plugin-content-blog/client';
import styles from './styles.module.css';

const currentYear = String(new Date().getFullYear());

function YearGroup({year, items, pathname}) {
  // Expand the group when it holds the active post so that navigating to an
  // older post does not re-collapse it and hide the active item.
  const hasActivePost = items.some((item) =>
    isSamePath(item.permalink, pathname),
  );
  return (
    <details
      className={styles.yearGroup}
      open={year === currentYear || hasActivePost}
    >
      <summary className={styles.yearSummary}>
        <span>{year}</span>
        <span className={styles.yearCount}>{items.length}</span>
      </summary>
      <ul className={clsx(styles.postList, 'clean-list')}>
        {items.map((item) => (
          <li key={item.permalink} className={styles.postItem}>
            <Link
              isNavLink
              to={item.permalink}
              className={styles.postLink}
              activeClassName={styles.postLinkActive}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

function BlogSidebarDesktop({sidebar}) {
  const items = useVisibleBlogSidebarItems(sidebar.items);
  const itemsByYear = groupBlogSidebarItemsByYear(items);
  const {pathname} = useLocation();

  return (
    <aside className="col col--3">
      <nav
        className={clsx(styles.sidebar, 'thin-scrollbar')}
        aria-label={translate({
          id: 'theme.blog.sidebar.navAriaLabel',
          message: 'Blog posts navigation',
          description: 'The ARIA label for the posts archive in the blog sidebar',
        })}
      >
        <div className={clsx(styles.sidebarTitle, 'margin-bottom--md')}>
          {sidebar.title}
        </div>
        {itemsByYear.map(([year, yearItems]) => (
          <YearGroup
            key={year}
            year={year}
            items={yearItems}
            pathname={pathname}
          />
        ))}
      </nav>
    </aside>
  );
}

export default memo(BlogSidebarDesktop);
