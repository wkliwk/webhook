'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('json spaces', 2)

function resJson(req) {
  const body = req.body ? req.body : null
  const header = req.headers ? req.headers : null
  const url = req.url ? `${header.host}${req.url}` : null
  const method = req.method ? req.method : null
  const queryStr = req.query ? req.query : null
  return {method, url, queryStr, body, header}
}

// GET
app.get('/webhook', (req, res) => {
  // console.log(req)
  // console.log(res)
  res.status(200).json(resJson(req))
})

// POST
app.post('/webhook', (req, res) => {
  // console.log(req)
  res.status(200).json(resJson(req))
})

//PUT
app.put('/webhook', (req, res) => {
  // console.log(req)
  res.status(200).json(resJson(req))
})

//DELETE
app.delete('/webhook', (req, res) => {
  // console.log(req)
  res.status(200).json(resJson(req))
})

//PATCH
//DELETE
app.patch('/webhook', (req, res) => {
  // console.log(req)
  res.status(200).json(resJson(req))
})

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port
    console.log(`App listening on port ${port}`)
  })
  // [END server]
}

module.exports = app
