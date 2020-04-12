import connection from '../database/connection'

export default {
  async create(product) {
    const [id] = await connection('products').insert(product)
    return { id, ...product }
  },
  index() {
    return connection('products').select('*')
  },
  read(id) {
    return connection('products').where('id', id).first().select('*')
  },
  readByCompany(id) {
    return connection('products').where('id_company', id).select('*')
  }
}
