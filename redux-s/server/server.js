const express = require('express')
const mongoose = require('mongoose')
// 链接monggo
const DB_URL = 'mongodb://127.0.0.1:27017/hello'

mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
  console.log('mongo connect success');
})
// 类似mysql的表,mongo里有文档、字段的概念

const User = mongoose.model('user', new mongoose.Schema({
  user: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
}))

// 新增数据
// User.create({
//   user:'aaa',
//   age:18
// },function(err,doc){
//   if(!err) {
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })

const app = express()

app.get('/', function (req, res) {
  res.send('<h1>HelloWorld</h1>')
})

app.get('/data', function (req, res) {
  User.find({},function(err,doc){
    res.json(doc)
  })
})

app.listen(9093, function () {
  console.log('Node app start at port 9093')
})