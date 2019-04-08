module.exports = async (ctx, next) => {
    let startTime = Date.now()
    console.log('startTime ', startTime , ctx.req.url)
    await next()

    let endTime = Date.now()
    console.log('endTime ', endTime , ' spend time ', (endTime - startTime) , ctx.req.url)
}
