import oneql from 'oneql'

import typeDefs from './types'
import resolvers from './resolvers'

new oneql({
    schema: {
        typeDefs,
        resolvers
    },
    context: async ({ ctx }) => {
        const { cookie, request } = ctx
        const { body }: { body: { head } } = request || {}
        const { head = {} } = body || {}
        const { auth }: {
            auth?: String
        } = cookie || {}
        return {
            token: auth || '',
            head,
            ctx
        }
    }
})