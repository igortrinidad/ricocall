'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Call extends Model {

  static boot () {
    super.boot()

    /**
     * Uuid trait
     */
    this.addTrait('@provider:IgorTrinidad/Uuid', { field: 'id', version: 'v4'})

  }

  /**
   * Relationships
   */

  fromUser () {
    return this.belongsTo('App/Models/User', 'fromId')
  }

  toUser () {
    return this.belongsTo('App/Models/User', 'toId')
  }

}

module.exports = Call
