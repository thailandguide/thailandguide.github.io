import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '148'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '6df'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'f58'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'eac'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '960'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'c55'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '539'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '609'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '0aa'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'ee3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'e6a'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '904'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '850'),
    routes: [
      {
        path: '/docs/3551953d-0dc1-468f-a571-fbbb14462fff',
        component: ComponentCreator('/docs/3551953d-0dc1-468f-a571-fbbb14462fff', '21f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/4045a3d6-d516-4812-905b-e4bcb76e0e05',
        component: ComponentCreator('/docs/4045a3d6-d516-4812-905b-e4bcb76e0e05', '314'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/4c1f0565-e280-4df2-9714-f023aefa5077',
        component: ComponentCreator('/docs/4c1f0565-e280-4df2-9714-f023aefa5077', '936'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/53c9e15a-847b-4b68-a05d-a5004f72e9fe',
        component: ComponentCreator('/docs/53c9e15a-847b-4b68-a05d-a5004f72e9fe', 'd14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/607af55b-4cf0-471e-8ad7-8e8e9c491722',
        component: ComponentCreator('/docs/607af55b-4cf0-471e-8ad7-8e8e9c491722', '083'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/99d66b4e-f984-458a-b3b5-53a0bc82a818',
        component: ComponentCreator('/docs/99d66b4e-f984-458a-b3b5-53a0bc82a818', '106'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/d712c9ef-312c-464a-bd82-3e598d6eb9cc',
        component: ComponentCreator('/docs/d712c9ef-312c-464a-bd82-3e598d6eb9cc', '6e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/df8acbcc-b10f-4fca-9ee1-482327ecbec8',
        component: ComponentCreator('/docs/df8acbcc-b10f-4fca-9ee1-482327ecbec8', '6d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '613'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
