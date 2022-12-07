import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '6bb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'd29'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '8ae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '2bc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '391'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '607'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '1e9'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '688'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '2f8'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '44e'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'bba'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'f6d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'a93'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'b5c'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '2ee'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '10a'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'abc'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '397'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b2f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '016'),
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
        path: '/docs/df8acbcc-b10f-4fca-9ee1-482327ecbec8',
        component: ComponentCreator('/docs/df8acbcc-b10f-4fca-9ee1-482327ecbec8', '6d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/ko-phangan',
        component: ComponentCreator('/docs/ko-phangan', 'ea6'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ca8'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
