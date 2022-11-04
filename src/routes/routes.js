import { aboutMobileRoutes } from 'services/about';
import { articlesMobileRoutes } from 'services/articles';
import { newsMobileRoutes } from 'services/news';
import { noticesMobileRoutes } from 'services/notices';
import { programsMobileRoutes } from 'services/programs';

export const desktopRoutes = [];

export const mobileRoutes = [
  {
    path: '/',
    element: <></>,
  },
  ...aboutMobileRoutes,
  ...articlesMobileRoutes,
  ...newsMobileRoutes,
  ...noticesMobileRoutes,
  ...programsMobileRoutes,
];
