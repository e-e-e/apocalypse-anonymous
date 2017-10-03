import Vue from 'vue';
import App from './App';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  render: h => h(App),
});
