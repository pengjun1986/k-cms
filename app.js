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

const mongoose = require('mongoose')
mongoose.connect('mongodb://47.96.86.201:30106/cms', { useNewUrlParser: true })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log(`we're connected!`)
})
