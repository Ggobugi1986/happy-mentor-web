import { lazy } from 'react';

const NoticeDesktop = lazy(() => import('./desktop/pages/notice'));
const NoticeMobile = lazy(() => import('./mobile/pages/notice'));
const NoticesMobile = lazy(() => import('./mobile/pages/notices'));

export const noticesDesktopRoutes = [
  {
    path: '/notices/:category/:id',
    element: <NoticeDesktop />,
  },
];

export const noticesMobileRoutes = [
  {
    path: '/notices/:category',
    element: <NoticesMobile />,
  },
  {
    path: '/notices/:category/:id',
    element: <NoticeMobile />,
  },
];
