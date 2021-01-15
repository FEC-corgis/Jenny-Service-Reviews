const { Sequelize, DataTypes } = require('sequelize');
const fakeData = require('./fakeData.js')
const names = require('./names.js')

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: '',
  database: 'fec_reviews',
})

sequelize.authenticate()
.then(() => console.log('Sequelize connected.'))
.catch(err => console.error('Unable to connect Sequelize.', err))

const User = sequelize.define('User', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: Sequelize.TEXT,
  photo: Sequelize.TEXT,
}, { timestamps: false
})

const Review = sequelize.define('Review', {
  reviewId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  year: Sequelize.INTEGER,
  month: Sequelize.INTEGER,
  description: Sequelize.TEXT,
  cleanliness: Sequelize.INTEGER,
  communication: Sequelize.INTEGER,
  checkIn: Sequelize.INTEGER,
  accuracy: Sequelize.INTEGER,
  location: Sequelize.INTEGER,
  value: Sequelize.INTEGER,
  propertyId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER, // change to userId foreign key??
}, { timestamps: false
})

const ReviewAvg = sequelize.define('ReviewAvg', {
  reviewAvgId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  avgCleanliness: Sequelize.DECIMAL(10,1),
  avgCommunication: Sequelize.DECIMAL(10,1),
  avgCheckIn: Sequelize.DECIMAL(10,1),
  avgAccuracy: Sequelize.DECIMAL(10,1),
  avgLocation: Sequelize.DECIMAL(10,1),
  avgValue: Sequelize.DECIMAL(10,1),
  avgOverall: Sequelize.DECIMAL(10,2),
  propertyId: Sequelize.INTEGER,
}, { timestamps: false
})

sequelize.sync({force: true})
.then(() => console.log('Tables synced.'))
.then(() => {
  console.log('SEEDING START')

let TOTAL_HOUSES = 100
let TOTAL_REVIEWS = 50

let namesArray = names.list.split(', ')
let namesPromises = []
namesArray.forEach((name, index) => {
  let prom = User.create({name: name, photo: index})
  namesPromises.push(prom)
})
Promise.all(namesPromises)

let reviewsArray = []
for (let i = 0; i < TOTAL_HOUSES; i++) {
        for (let r = 0; r < TOTAL_REVIEWS; r++) {
          let review = fakeData.fullReview()
          let randomUser = Math.floor(Math.random() * 100)
          let entry = Review.create({
            year: review.date[0],
            month: review.date[1],
            description: review.description,
            cleanliness: review.ratings.cleanliness,
            communication: review.ratings.communication,
            checkIn: review.ratings.checkIn,
            accuracy: review.ratings.accuracy,
            location: review.ratings.location,
            value: review.ratings.value,
            propertyId: i,
            userId: randomUser,
            })
            reviewsArray.push(entry)
        }
      }
      Promise.all(reviewsArray)
      .then(() => {
        return Review.findAll({ order: sequelize.col('propertyId')})
      })
      .then(() => {
        for (let i = 0; i < TOTAL_HOUSES; i++) {
          Review.findAll({where: { propertyId: i }, raw: true}) // MUST ADD 'RAW: TRUE' OR ELSE ADDS 'PREVIOUSDATAVALUES'!!!
          .then(data => {
            // console.log('found reviews;', data)
            let avgCleanlinessSum = 0
            let avgCommunicationSum = 0
            let avgCheckInSum = 0
            let avgAccuracySum = 0
            let avgLocationSum = 0
            let avgValueSum = 0
            for (let r = 0; r < TOTAL_REVIEWS; r++) {
              avgCleanlinessSum += data[r].cleanliness
              avgCommunicationSum += data[r].communication
              avgCheckInSum += data[r].checkIn
              avgAccuracySum += data[r].accuracy
              avgLocationSum += data[r].location
              avgValueSum += data[r].value
            }
            let avgCleanliness = avgCleanlinessSum / TOTAL_REVIEWS
            let avgCommunication = avgCommunicationSum / TOTAL_REVIEWS
            let avgCheckIn = avgCheckInSum / TOTAL_REVIEWS
            let avgAccuracy = avgAccuracySum / TOTAL_REVIEWS
            let avgLocation = avgLocationSum / TOTAL_REVIEWS
            let avgValue = avgValueSum / TOTAL_REVIEWS
            let avgOverall = (avgCleanliness + avgCommunication + avgCheckIn + avgAccuracy + avgLocation + avgValue) / 6

            ReviewAvg.create({
                avgCleanliness,
                avgCommunication,
                avgCheckIn,
                avgAccuracy,
                avgLocation,
                avgValue,
                avgOverall,
                propertyId: i,
            })
          })
        }
      })

})
.catch(err => console.log('Table sync error:', err))