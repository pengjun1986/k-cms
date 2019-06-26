const Koa = require('koa')
const app = new Koa()

const router = require('./router')
const bodyParser = require('koa-bodyparser')

app.use(bodyParser())

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000`)
)