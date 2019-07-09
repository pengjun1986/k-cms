const Router = require('koa-router')
const router = new Router()

const type = require('./routers/type')

router.get('/type', type.list)
router.post('/type', type.insert)

module.exports = router