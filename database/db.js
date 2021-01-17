const { Sequelize, DataTypes } = require('sequelize');

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
  overall: Sequelize.INTEGER,
  propertyId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER,
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

sequelize.sync() // need to sync each time if not seeding?
.then(() => console.log('Tables synced.'))
.catch(err => console.log(err))

let top6 = function(id) {
  let allProps = {}
  return ReviewAvg.findOne({
    where: { propertyId: id },
    raw: true,
  })
  .then(data => {
    allProps.averages = data
  })
  .then(() => {
    return Review.findAll({
      where: { propertyId: id },
      raw: true,
      order: [
        ['year', 'DESC'],
        ['month', 'DESC'],
      ],
      limit: 6,
    })
  })
  .then(data => {
    allProps.reviews6 = data
    let userPromises = []
    data.forEach(review => {
      let user = User.findOne({
        where: { userId: review.userId },
        raw: true,
      })
      userPromises.push(user)
    })
    return Promise.all(userPromises)
  })
  .then(data => {
    allProps.users = data
  })
  .then(() => {
    return Review.count({
      where: { propertyId: id },
    })
  })
  .then(data => {
    allProps.totalReviews = data
  })
  .then(() => {
    return allProps
  })
  .catch(err => console.log(err))
}

module.exports = {
  top6,
}