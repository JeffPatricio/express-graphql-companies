import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'
import CompanyType from './Company'
import CompanyController from '../../controllers/CompanyController'

export default new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {
      type: GraphQLInt
    },
    name: {
      type: GraphQLString
    },
    id_company: {
      type: GraphQLInt
    },
    company: {
      type: CompanyType,
      resolve({ id_company }) {
        return CompanyController.read(id_company)
      }
    }
  })
})