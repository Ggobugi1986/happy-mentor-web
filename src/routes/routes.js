import { newsMobileRoutes } from 'services/news';
import { noticesMobileRoutes } from 'services/notices';
import { programsMobileRoutes } from 'services/programs';

export const desktopRoutes = [];

export const mobileRoutes = [
  {
    path: '/',
    element: <></>,
  },
  ...newsMobileRoutes,
  ...noticesMobileRoutes,
  ...programsMobileRoutes,
];
