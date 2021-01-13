const express = require('express')
const app = express()
const port = 1985
const reviews = require('../database/db.js')

app.use(express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/test', (req, res) => {
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})