const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ObjectId = Schema.Types.ObjectId

const schema = new Schema({
  id: ObjectId,
  name: String
}, {
  collection: 'type'
})

const model = {
  Type: mongoose.model('Type', schema)
}

module.exports = model