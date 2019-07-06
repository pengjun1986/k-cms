const Router = require('koa-router')
const router = new Router()

const glob = require('glob')
const jsArray = glob.sync('./routers/*.js')
console.log(jsArray)

module.exports = router