exports.up = (knex) => {
  return knex.schema.createTable('companies', (table) => {
    table.increments()
    table.string('name').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('companies')
}
