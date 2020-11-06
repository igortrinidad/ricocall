'use strict'

/*
|--------------------------------------------------------------------------
| BasicSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')

class BasicSeeder {
  async run () {

    await User.create({
      name: 'igor trindade',
      email: 'igortrindade.me@gmail.com',
      password: '123123',
      isAdmin: true
    })
  }
}

module.exports = BasicSeeder
