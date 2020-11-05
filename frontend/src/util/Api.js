import axios from 'axios'
import mainVuex from '@/mainVuex'

/**
 * Default headers
 */
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';


/**
 * Request interceptors
 */
axios.interceptors.request.use(function (config) {
  /**
   * Set authorization headers according type of user for the request
   */
  if(mainVuex.getters.getterLoggedUserToken && !config.crossDomain) {
    config.headers.authorization = `Bearer ${mainVuex.getters.getterLoggedUserToken}`
  }

  if(config.loader){
    mainVuex.dispatch('setLoaderShow', true)
  }

  return config;
}, function (error) {
  // console.log(error)
  return Promise.reject(error);
});

/**
 * Response interceptors
 */
axios.interceptors.response.use(function (response) {

  if(response.config.loader){
    mainVuex.dispatch('setLoaderShow', false)
  }

  // setTimeout(() => {
  //   mainVuex.dispatch('resetLoader')
  // },2500)

  return response;
}, function (error) {

  setTimeout(() => {
    mainVuex.dispatch('resetLoader')
  },2500)


  /**
   * Handle unauthenticated user
   * Check which type of user based on the request url
   * Clear the token
   * Set userLogged false
   */

  if(error.response && error.response.status && error.response.status === (401 || 403)) {
    //Handle unauthenticated users

  }

  return Promise.reject(error);
});

export default axios
