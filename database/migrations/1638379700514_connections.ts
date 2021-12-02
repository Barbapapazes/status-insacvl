import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Connections extends BaseSchema {
  protected tableName = 'connections'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('service_id').notNullable()
      table.integer('status_code').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
