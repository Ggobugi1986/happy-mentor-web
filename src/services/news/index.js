import { lazy } from 'react';

const NewsItemDesktop = lazy(() => import('./desktop/pages/newsItem'));
const NewsMobile = lazy(() => import('./mobile/pages/news'));
const NewsItemMobile = lazy(() => import('./mobile/pages/newsItem'));

export const newsDesktopRoutes = [
  {
    path: '/news/:category/:id',
    element: <NewsItemDesktop />,
  },
];

export const newsMobileRoutes = [
  {
    path: '/news/:category',
    element: <NewsMobile />,
  },
  {
    path: '/news/:category/:id',
    element: <NewsItemMobile />,
  },
];
