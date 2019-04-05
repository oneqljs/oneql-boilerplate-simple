import OneQL from 'oneql'

import typeDefs from './types'
import resolvers from './resolvers'

// 初始化oneQL
OneQL({
    schema: {
        typeDefs,
        resolvers
    }
})