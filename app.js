'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// [START hello_world]
// Say hello!
app.get('/', (req, res) => {
  console.log(req)
  // console.log(res)
  const body = req.body ? req.body : null
  const header = req.headers ? req.headers : null
  const url = req.url ? `${header.host}${req.url}` : null
  const method = req.method ? req.method : null
  const queryStr = req.query? req.query : null

  // console.log(res.headers)
  const resJson = {method, url, queryStr, body, header}
  res.status(200).json(resJson)
})

// [END hello_world]

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
