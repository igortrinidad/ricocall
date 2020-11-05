'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CallSchema extends Schema {
  up () {
    this.create('calls', (table) => {
      table.increments('key')
      table.uuid('id').index().unique().notNullable()
      table.uuid('fromId').index().unique().notNullable()
      table.uuid('toId').index().unique().notNullable()
      table.string('callSID').notNullable()
      table.string('status').notNullable()
      table.time('duration').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('calls')
  }
}

module.exports = CallSchema
