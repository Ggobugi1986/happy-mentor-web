import { lazy } from 'react';

const ProgramDesktop = lazy(() => import('./desktop/pages/program'));
const ProgramMobile = lazy(() => import('./mobile/pages/program'));

export const programsDesktopRoutes = [
  {
    path: '/programs/:type/:id',
    element: <ProgramDesktop />,
  },
];

export const programsMobileRoutes = [
  {
    path: '/programs/:type/:id',
    element: <ProgramMobile />,
  },
];
