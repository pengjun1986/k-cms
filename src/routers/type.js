const Type = require('../db/type').Type

module.exports = {
  async list (ctx) {
    const type = new Type()
    console.log(Type.find)
    const data = await Type.find({ name: '张三' })
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