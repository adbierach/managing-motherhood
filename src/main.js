// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('swiper/dist/css/swiper.css')

import jQuery from 'jquery'

window.$ = window.jQuery = jQuery

require('bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
