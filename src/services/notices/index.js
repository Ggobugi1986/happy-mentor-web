import { lazy } from 'react';

const NoticeDesktop = lazy(() => import('./desktop/pages/notice'));
const NoticeMobile = lazy(() => import('./mobile/pages/notice'));

export const noticesDesktopRoutes = [
  {
    path: '/notices/:category/:id',
    element: <NoticeDesktop />,
  },
];

export const noticesMobileRoutes = [
  {
    path: '/notices/:category/:id',
    element: <NoticeMobile />,
  },
];
