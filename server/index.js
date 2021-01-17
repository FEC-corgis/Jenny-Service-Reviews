const express = require('express')
const app = express()
const port = 1984
const db = require('../database/db.js')

app.use(express.static('./client/dist'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/propId/:id', (req, res) => {
  const id = req.params.id
    return db.top6(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`Listening at port ${port}.`)
})