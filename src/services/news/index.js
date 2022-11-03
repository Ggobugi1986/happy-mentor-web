import { lazy } from 'react';

const NewsItemDesktop = lazy(() => import('./desktop/pages/newsItem'));
const NewsItemMobile = lazy(() => import('./mobile/pages/newsItem'));

export const newsDesktopRoutes = [
  {
    path: '/news/:type/:id',
    element: <NewsItemDesktop />,
  },
];

export const newsMobileRoutes = [
  {
    path: '/news/:type/:id',
    element: <NewsItemMobile />,
  },
];
