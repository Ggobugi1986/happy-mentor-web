import { lazy } from 'react';

const ArticlesDesktop = lazy(() => import('./desktop/pages/articles'));
const ArticlesMobile = lazy(() => import('./mobile/pages/articles'));

export const articlesDesktopRoutes = [
  {
    path: '/articles',
    element: <ArticlesDesktop />,
  },
];

export const articlesMobileRoutes = [
  {
    path: '/articles',
    element: <ArticlesMobile />,
  },
];
