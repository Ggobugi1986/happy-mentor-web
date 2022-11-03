import { newsMobileRoutes } from 'services/news';
import { programsMobileRoutes } from 'services/programs';

export const desktopRoutes = [];

export const mobileRoutes = [
  {
    path: '/',
    element: <></>,
  },
  ...newsMobileRoutes,
  ...programsMobileRoutes,
];
