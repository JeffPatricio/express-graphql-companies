import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql'
import ProductController from '../../controllers/ProductController'
import ProductType from './Product'

export default new GraphQLObjectType({
  name: 'Company',
  fields: {
    id: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve({ id }) {
        return ProductController.readByCompany(id)
      }
    }
  }
})