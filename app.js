// const helper = require('./helper')
// const { sum } = require('./helper')
const express = require('express')
const http = require('http')

const app = express()

app.get('/test',(req,res)=>{
    res.end('hello world')
})
app.listen(3000)

// const server = http.createServer((req,res)=>{
//   res.end('hello world')
// })

// server.listen(3000)
// const total = sum(3, 5)
// console.log(http)
// console.log(total)

// console.log(process)