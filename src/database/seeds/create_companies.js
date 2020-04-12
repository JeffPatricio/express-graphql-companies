exports.seed = (knex) => {
  return knex('companies').del().then(() => {
    return knex('companies').insert([
      { name: 'Apple' },
      { name: 'Google' },
      { name: 'Microsoft' }
    ])
  })
}
