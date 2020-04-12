exports.seed = (knex) => {
  return knex('products').del().then(() => {
    return knex('products').insert([
      { name: 'Iphone', id_company: 1 },
      { name: 'Ipad', id_company: 1 },
      { name: 'MacBook', id_company: 1 },
      { name: 'Android', id_company: 2 },
      { name: 'Firebase', id_company: 2 },
      { name: 'Windows 10', id_company: 3 },
      { name: 'Office', id_company: 3 }
    ])
  })
}
