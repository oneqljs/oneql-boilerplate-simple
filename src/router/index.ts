import router from 'oneql/router'

router.get('/user', (ctx) => {
    console.log('user -----')

    ctx.body = {
        success: 'user info'
    }
})

export default router