import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueFactory from 'vue-factory';

import App from './App';
import store from './store/store';
import routes from './routes/routes';
import FactoryExample from './factories/example/example';

import Api from './services/api';

Vue.use(VueFactory);
Vue.use(VueRouter);
Vue.use(VueResource);
Api.init(Vue, store);


Vue.factory.register({
  example: new FactoryExample(),
});

const router = new VueRouter({

  base: __dirname,
  routes,
});

new Vue({ // eslint-disable-line
  el: '#app',
  router,
  store,
  providers: ['example'],
  render: h => h(App),
});
