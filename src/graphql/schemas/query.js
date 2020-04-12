import { GraphQLObjectType, GraphQLList, GraphQLNonNull, GraphQLInt } from 'graphql'
import CompanyType from '../types/Company'
import ProductType from '../types/Product'
import CompanyController from '../../controllers/CompanyController'
import ProductController from '../../controllers/ProductController'

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    company: {
      type: CompanyType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve(_, { id }) {
        return CompanyController.read(id)
      }
    },

    companies: {
      type: new GraphQLList(CompanyType),
      resolve() {
        return CompanyController.index()
      }
    },

    products: {
      type: new GraphQLList(ProductType),
      resolve() {
        return ProductController.index()
      }
    },

    product: {
      type: ProductType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      resolve(_, { id }) {
        return ProductController.read(id)
      }
    }
    
  }
})