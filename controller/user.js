const sleep = async (ms) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, ms)
  })
}

const users = [{
  id: 1,
  name: '张三',
  mobile: '18866660001'
}, {
  id: 2,
  name: '李四',
  mobile: '18866660002'
}]
  
module.exports = {
  login (ctx) {
    ctx.body = {
      username: ctx.request.body.username
    }
  },
  async profile (ctx) {
    await sleep(1000)
    ctx.body = {
      username: '相学长',
      sex: 'man',
      age: '999'
    }
  },
  list (ctx) {
    ctx.body = users
  },
  page (ctx) {
    ctx.body = {
      total: 100,
      list: users
    }
  }
}