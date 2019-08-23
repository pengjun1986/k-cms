const Type = require('../db/type').Type

module.exports = {
  async list (ctx) {
    const data = await Type.find()
    ctx.body = {
      code: 200,
      data
    }
  },
  async insert (ctx) {
    const type = new Type({ name: '张三' })
    const rsp = await type.save()
    ctx.body = {
      code: 200,
      data: rsp
    }
  }
}