import express from 'express'
import graphqlHttp from 'express-graphql'
import 'dotenv/config'
import schema from './graphql/schemas'

const app = express()

app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true
}))

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server running in port 8080')
}) 