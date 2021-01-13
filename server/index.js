const express = require('express')
const app = express()
const port = 1984
const db = require('../database/db.js')
const fakeData = require('./fakeData.js')

app.use(express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/test', (req, res) => {
  let fakeTest = fakeData.fullReview()
  res.send(fakeTest)
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})