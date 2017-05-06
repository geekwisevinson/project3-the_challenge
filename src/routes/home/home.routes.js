import Home from '../../components/pages/home/home';
import Dashboard from '../../components/pages/home/child-views/home-dashboard/home-dashboard';
import HomeLogin from '../../components/pages/home/child-views/home-login/home-login';

const HomeRoutes = {
  path: 'home',
  component: Home,
  children: [
    { name: 'home-dashboard', path: '', component: Dashboard },
    { name: 'home-login', path: 'login', component: HomeLogin },
  ],
};

export default HomeRoutes;
