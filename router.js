const Router = require('koa-router')
const router = new Router()
const user = require('./controller/user')
const type = require('./controller/type')

const s = () => {

}

router.post('/user/login', user.login)
router.get('/user/profile', user.profile)
router.get('/user/list', user.list)
router.get('/user/page', user.page)
console.log('-----')
// console.log(type)
// router.get('/type', type.list)

module.exports = router