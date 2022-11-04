import { lazy } from 'react';

const AboutDesktop = lazy(() => import('./desktop/pages/about'));
const AboutMobile = lazy(() => import('./mobile/pages/about'));

export const aboutDesktopRoutes = [
  {
    path: '/about:category',
    element: <AboutDesktop />,
  },
];

export const aboutMobileRoutes = [
  {
    path: '/about/:category',
    element: <AboutMobile />,
  },
];
