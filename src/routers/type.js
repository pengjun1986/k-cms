module.exports = {
  list (ctx) {
    // console.log('mongoose =', mongoose)
    ctx.body = {
      username: 'aaaa'
    }
  },
  insert (ctx) {
    // console.log('mongoose =', mongoose)
    ctx.body = {
      username: 'bbb'
    }
  }
}