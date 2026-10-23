import React from 'react';
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarSiblings} from '@docusaurus/plugin-content-docs/client';

export default function ProjectsDocCardList() {
  const items = useCurrentSidebarSiblings();

  const filteredItems = items.filter(
    (item) => !(item.type === 'link' && item.href === '/projects/')
      && !(item.type === 'link' && item.docId === 'projects/index'),
  );

  return <DocCardList items={filteredItems} />;
}