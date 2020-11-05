'use strict'
const User = use('App/Models/User')

class UserController {

  /**
   * GET users
   *
   * @param {object} ctx
   */
  async get({request, response, auth}) {

    const user = await auth.getUser()

    const users = await User
      .query()
      .where('id', '!=', user.id)
      .fetch()

    return response.status(200).json({users})
  }


}

module.exports = UserController
