import { GraphQLObjectType, GraphQLNonNull, GraphQLInt, GraphQLString } from 'graphql'
import CompanyType from '../types/Company'
import ProductType from '../types/Product'
import CompanyController from '../../controllers/CompanyController'
import ProductController from '../../controllers/ProductController'

export default new GraphQLObjectType({
  name: 'MutationType',
  fields: {

    createCompany: {
      type: CompanyType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(_, { name }) {
        return CompanyController.create({ name })
      }
    },
    deleteCompany: {
      type: CompanyType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      async resolve(_, { id }) {
        const company = await CompanyController.read(id)
        if (!company) {
          throw new Error('The provided company id does not exist')
        }
        return CompanyController.delete(id)
      }
    },

    createProduct: {
      type: ProductType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        id_company: {
          type: new GraphQLNonNull(GraphQLInt)
        }
      },
      async resolve(_, { name, id_company }) {
        const company = await CompanyController.read(id_company)
        if (!company) {
          throw new Error('The provided company id does not exist')
        }
        return ProductController.create({ name, id_company })
      }
    }

  }
})  