import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from '@src/router';
import store from '@/store';
import service from '@/libs/service';
import Cookies from 'js-cookie';
import { Header, Button, Field, Cell, Tabbar, TabItem, Picker} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Cell.name, Cell);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Picker.name, Picker);

Vue.prototype.$service = service;
Vue.prototype.$Cookies = Cookies;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')