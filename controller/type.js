module.exports = {
  list (ctx) {
    ctx.body = {
      username: ctx.request.body.username
    }
  }
}