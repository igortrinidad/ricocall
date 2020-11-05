'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Helpers = use('Helpers')

/**
 * Resourceful controller for interacting with calls
 */
class HomeController {

  /**
   * GET home
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async home ({ response, view }) {
    response.download(Helpers.resourcesPath('views/index.html'))
  }

}

module.exports = HomeController
