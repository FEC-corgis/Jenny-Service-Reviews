const express = require('express')
const app = express()
const port = 1984
const db = require('../database/db.js')
const cors = require('cors')
const path = require('path')

app.use('/rooms/:id', express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/reviews/propId/:id', async (req, res) => {
  const id = req.params.id
      try {
        let data = await db.reviews50(id)
        console.log('AVERAGES', data.averages)
        if (!data.averages) {
          return res.status(404).json({})
        }
        res.send(data)
      } catch(e) {
        console.log(e)
      }
})

app.get('/reviews/overallRating/:id', async (req, res) => {
  const id = req.params.id
  try {
    let data = await db.overall(id)
    let overallObj = {}
    overallObj.overallRating = Number(data.avgOverall)
    res.send(overallObj)
  } catch(e) {
    console.log(e)
  }
})

app.get('/reviews/totalReviews/:id', async (req, res) => {
  const id = req.params.id
  try {
    let data = await db.total(id)
    let totalObj = {}
    totalObj.totalReviews = data
    res.send(totalObj)
  } catch(e) {
    console.log(e)
  }
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})

module.exports.app = app