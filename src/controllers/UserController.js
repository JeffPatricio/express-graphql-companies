import connection from '../database/connection'

export default {
  async store(user) {
    const [id] = await connection('users').insert(user)
    return { id, ...user }
  },
  index() {
    return connection('users').select('*')
  },
  async delete(id) {
    const user = await connection('users').where('id', id).first().select('*')
    if (user) {
      const deleted = await connection('users').where('id', id).delete()
      return deleted > 0 ? user : null
    }
    return null
  },
  async read(id) {
    return connection('users').where('id', id).first().select('*')
  },
  async update(id, name) {
    const user = await connection('users').where('id', id).first().select('*')
    if (user) {
      const updated = await connection('users').where('id', id).update({ name })
      return updated > 0 ? { ...user, name } : null
    }
    return null
  }
}
