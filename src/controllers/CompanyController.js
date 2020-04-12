import connection from '../database/connection'

export default {
  async create(company) {
    const [id] = await connection('companies').insert(company)
    return { id, ...company }
  },
  index() {
    return connection('companies').select('*')
  },
  read(id) {
    return connection('companies').where('id', id).first().select('*')
  },
  async delete(id) {
    const company = await connection('companies').where('id', id).first().select('*')
    if (company) {
      const deleted = await connection('companies').where('id', id).delete()
      await connection('products').where('id_company', id).delete()
      return deleted > 0 ? company : null
    }
    return null
  }
}
