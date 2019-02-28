import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from '../../node_modules/vuetify'
import '../../node_modules/vuetify/dist/vuetify.css'
import './css/roboto.css'
Vue.use(Vuetify)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
