const express = require('express')
const app = express()
const port = 1984
const db = require('../database/db.js')
const cors = require('cors')
const path = require('path')
const compression = require('compression')

app.get('/bundle.js', (req, res)=> {
  res.sendFile(path.join(__dirname, '../client/dist/bundle.js'))
})
app.use('/rooms/:id', express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(compression())
app.use(express.compress())

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

app.get('/reviews/morePlaces/:id', async (req, res) => {
  const id = req.params.id
  try {
    let data = {}
    let overallRating = await db.overall(id)
    data.overallRating = overallRating.avgOverall
    let reviewsTotal = await db.total(id)
    data.reviewsTotal = reviewsTotal
    res.send(data)
  } catch(e) {
    console.log(e)
  }
})

app.get('/reviews/header/:id', async (req, res) => {
  const id = req.params.id;
  try {
      const [total, rating] = await Promise.all([
          db.total(id),
          db.overall(id),
      ]);
      res.send({ rating: rating.avgOverall, numberOfReviews: total });
  } catch (e) {
      console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})

module.exports.app = app