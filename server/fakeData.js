let lorem = require('./rawData/loremipsum.js')
let nameList = require('./rawData/names.js')

let ratings = function() {
  // min to max range inclusive: Math.floor(Math.random() * (max - min + 1)) + min
  let metrics = ['cleanliness', 'communication', 'checkIn', 'accuracy', 'location', 'value']
  let allRatings = {}
  metrics.forEach(metric => {
    allRatings[metric] = Math.floor(Math.random() * (5 - 2 + 1)) + 2
  })
  // obj with 6 ratings
  return allRatings
}

let date = function() {
  let years = ['2018', '2019', '2020']
  let randomYear = years[Math.floor(Math.random() * 3)]
  let randomMonth = Math.floor(Math.random() * 12)
  // array with year & month
  return [randomYear, randomMonth]
}

let description = function() {
  // string of 2 sentences
  return [1,2].map(sentence => {
    return lorem.blurb.split('. ')[Math.floor(Math.random() * 115)] + '. '
  }).join('')
}

let users = function() {
  let index = Math.floor(Math.random() * 99)
  let randomName = nameList.list.split(', ')[index]
  if (index < 50) {
    let photo = `https://randomuser.me/api/portraits/women/${index}.jpg`
    return [randomName, photo]
  } else {
    let photo = `https://randomuser.me/api/portraits/men/${index}.jpg`
    return [randomName, photo]
  }
  // array of name index (for gender id) & name
}

let fullReview = function() {
  let review = {}
  review.ratings = ratings()
  review.user = users()
  review.date = date()
  review.description = description()
  return review
}
console.log(fullReview())

module.exports = {
  ratings,
  date,
  description,
  users,
  fullReview,
}