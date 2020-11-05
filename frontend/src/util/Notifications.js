
import iziToast from 'izitoast'

export default class Notifications {
  success = successNotify
  error = errorNotify
  warning = warningNotify
  info = infoNotify
}

export const successNotify = function (payload) {

  iziToast.show({
    class: 'custom-notify',
    position: payload.position || 'bottomRight',
    title: payload.title || '',
    message: (typeof(payload) == 'string') ? payload :  payload.message || '',
    theme: 'dark',
    color: '#03DFAE',
    titleColor: '#000',
    messageColor: '#000',
    iconColor: '#000',
    progressBarColor: '#000',
    timeout: 3000,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    transitionIn: 'bounceInLeft',
    transitionInMobile: 'bounceInLeft'
  })
}

export const errorNotify = function (payload) {

  iziToast.show({
    class: 'custom-notify',
    position: payload.position || 'bottomRight',
    title: payload.title || '',
    message: (typeof(payload) == 'string') ? payload :  payload.message || '',
    theme: 'dark',
    color: '#ff0f4a',
    titleColor: '#fff',
    messageColor: '#fff',
    iconColor: '#fff',
    progressBarColor: '#fff',
    timeout: 3000,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    transitionIn: 'bounceInLeft',
    transitionInMobile: 'bounceInLeft'
  })
}


export const warningNotify = function (payload) {

  iziToast.show({
    class: 'custom-notify',
    position: payload.position || 'bottomRight',
    title: payload.title || '',
    message: (typeof(payload) == 'string') ? payload :  payload.message || '',
    color: '#FFC400',
    titleColor: '#22292F',
    messageColor: '#22292F',
    iconColor: '#22292F',
    progressBarColor: '#22292F',
    timeout: 3000,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOut',
    transitionInMobile: 'bounceInLeft',
    transitionOutMobile: 'fadeOutDown',
  })
}

export const infoNotify = function (payload) {

  iziToast.show({
    class: 'custom-notify',
    position: payload.position || 'bottomRight',
    title: payload.title || '',
    message: (typeof(payload) == 'string') ? payload :  payload.message || '',
    theme: 'dark',
    color: '#270E66',
    titleColor: '#fff',
    messageColor: '#fff',
    iconColor: '#fff',
    progressBarColor: '#fff',
    timeout: 3000,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    transitionIn: 'bounceInLeft',
    transitionInMobile: 'bounceInLeft'
  })
}
