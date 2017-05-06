import LayoutTwo from '../components/layouts/layout-two';

import HomeRoutes from './home/home.routes';

export default [
  {
    path: '/',
    component: LayoutTwo,
    children: [
      HomeRoutes,

      { path: '/*', redirect: '/home/login' },
    ],
  },
];
