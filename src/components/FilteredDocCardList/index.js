import React from 'react';
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarSiblings} from '@docusaurus/plugin-content-docs/client';
import {useLocation} from '@docusaurus/router';

export default function FilteredDocCardList() {
  const items = useCurrentSidebarSiblings();
  const {pathname} = useLocation();

  const filteredItems = items.filter(
    (item) => !(item.type === 'link' && item.href === pathname),
  );

  return <DocCardList items={filteredItems} />;
}
