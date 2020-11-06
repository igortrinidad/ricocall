import Vue from 'vue'
import VueFeather from 'vue-feather'
import Api from '@/util/Api'

import Loader from '@/components/Loader'
import InputWithIcon from '@/components/InputWithIcon'
import Caller from '@/components/Caller'
import Notifications from './util/Notifications'

export default (() => {

  /**
   * Settings and global variables
   */
  Vue.config.productionTip = false
  Vue.prototype.$api = Api
  Vue.prototype.$notifications = new Notifications()

  /**
   * Packages and components
   */
  Vue.use(VueFeather)

  Vue.component('InputWithIcon', InputWithIcon)
  Vue.component('Loader', Loader)
  Vue.component('Caller', Caller)

  /**
   * Custom directives
   */
  Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        if (!(el == event.target || el.contains(event.target))) {
          vnode.context[binding.expression](event);
        }
      }
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    },
  })


})()
