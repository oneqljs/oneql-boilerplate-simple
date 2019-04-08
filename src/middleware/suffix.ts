module.exports = async (ctx, next) => {
    ctx.suffix = 'suffix middle'
    console.log('after suffix middle ----')
    await next()
    console.log('after suffix middle ---- after next()')
}
