import log from './utils/dev/log'
const _log = log(true,'main.js');

import Vue from 'vue'
import App from './App.vue'
import {router} from './router'
import store from './store'
import ApiService from './services/api.service'
import {TokenService} from './services/storage.service'



Vue.config.productionTip = false;
_log(process.env);

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader();
  ApiService.mount401Interceptor();
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
