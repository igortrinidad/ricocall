'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')


/**
 * User Auth
 */
Route.group(() => {
  Route.post('register', 'AuthController.register').validator('RegisterUser')
  Route.post('login', 'AuthController.login')
  Route.post('checkEmail', 'AuthController.checkEmail')
  Route.post('generateNewPassword', 'AuthController.generateNewPassword')
  Route.get('getLoggedUser', 'AuthController.getLoggedUser').middleware(['auth:user'])
  Route.post('update', 'AuthController.update').middleware(['auth:user'])
  Route.get('logout', 'AuthController.logout').middleware(['auth:user'])
}).prefix('/api/user/auth')

/**
 * User Auth
 */
Route.group(() => {
  Route.get('get', 'UserController.get')
}).prefix('/api/users').middleware(['auth:user'])

/**
 * Twilio
 */
Route.group(() => {
  Route.get('token', 'TwilioController.token').middleware(['auth:user'])
  Route.post('updateApplicationVoiceUrl', 'TwilioController.updateApplicationVoiceUrl').middleware(['auth:user'])
  Route.get('routeIncomingCall', 'TwilioController.routeIncomingCall')
}).prefix('/api/twilio')
