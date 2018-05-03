
import csshook from 'css-modules-require-hook/preset'
import assethook from 'asset-require-hook'

assethook({
  extensions:['png']
})

assethook({
  extensions:['gif']
})

import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom'
import App from '../src/app'
import {renderToString} from 'react-dom/server'
import reducers from '../src/reducer'


const express = require('express');
const utils = require('utility');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path')

const userRouter = require('./user');
const model = require('./model')
const Chat = model.getModel('chat')

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

// app.use('/user', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://test.xxt.cn:3000");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });

io.on('connection',function(socket){
  // console.log('user login')
  socket.on('sendmsg',function(data){
    const {from,to,msg} = data;
    const chatid = [from,to].sort().join('_')
    Chat.create({chatid,from,to,content:msg},function(err,doc){
      io.emit('recvmsg',Object.assign({},doc._doc))
    })
    // console.log(data)
    // io.emit('recvmsg',data)
  })
})

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user',userRouter);
app.use(function(req,res,next){
  if(req.url.startsWith('/user/')||req.url.startsWith('/static/')){
    return next()
  }

  const store = createStore(reducers, compose(
    applyMiddleware(thunk),
  ))

  let context = {}

  const markup = renderToString(
    (<Provider store={store}>
      <StaticRouter
       location={req.url}
       context={context}
      >
        <App></App>
      </StaticRouter>
    </Provider>)
  )
  res.send(markup)
})
app.use('/',express.static(path.resolve('build')))


server.listen(9093, function () {
  console.log('Node app start at port 9093')
})