import { lazy } from 'react';

const ProgramDesktop = lazy(() => import('./desktop/pages/program'));
const ProgramMobile = lazy(() => import('./mobile/pages/program'));

export const programsDesktopRoutes = [
  {
    path: '/programs/:category/:id',
    element: <ProgramDesktop />,
  },
];

export const programsMobileRoutes = [
  {
    path: '/programs/:category/:id',
    element: <ProgramMobile />,
  },
];
