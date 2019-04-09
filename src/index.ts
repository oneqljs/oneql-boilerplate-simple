import oneql from 'oneql'

import typeDefs from './types'
import resolvers from './resolvers'

new oneql({
    schema: {
        typeDefs,
        resolvers
    },
    context: async ({ ctx }) => {
        return {
            ctx
        }
    }
})