'use strict'

const StandartMessages = require('./StandartMessages')

class RegisterUser {

  get rules () {
    return {
      name: 'required',
      email: 'required|unique:users,email',
      password: 'required|min:6|max:20'
    }
  }

}

Object.assign(RegisterUser.prototype, StandartMessages)


module.exports = RegisterUser
