exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.int('id_company').notNullable()
    table.foreign('id_company').references('id').inTable('companies')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('products')
}
