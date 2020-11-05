'use strict'

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class User extends Model {

  static get fillable() {
    return [
      'name',
      'email',
      'password',
      'isBlocked'
    ]
  }

  static boot () {
    super.boot()

    /**
     * Uuid trait
     */
    this.addTrait('@provider:IgorTrinidad/Uuid', { field: 'id', version: 'v4'})

    /**
     * PasswordHash trait
     */
    this.addTrait('@provider:IgorTrinidad/PasswordHash', {field: 'password'})

    /**
     * Title case
     */
    this.addTrait('@provider:IgorTrinidad/TitleCase', { fields: ['name', 'lastName'] })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = User
