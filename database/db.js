const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: '',
  database: 'fec_reviews',
})

let startup = async () => {
  try {
    await sequelize.authenticate()
    console.log('Sequelize connected.')
  } catch(e) {
    console.log('Unable to connect Sequelize', e)
  }
}

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

let execSync = async () => {
  try {
    await sequelize.sync() // need to sync each time if not seeding?
    console.log('Tables synced.')
  } catch(e) {
    console.log(e)
  }
}

let top6 = async (id) => {
  try {
    let allProps = {}
    let propAvg = await ReviewAvg.findOne({
      where: { propertyId: id },
      raw: true,
    })
      allProps.averages = propAvg
      let propReviews = await Review.findAll({
        where: { propertyId: id },
        raw: true,
        order: [
          ['year', 'DESC'],
          ['month', 'DESC'],
        ],
        limit: 6,
      })
      allProps.reviews6 = propReviews
      let userPromises = []
      propReviews.forEach(review => {
        let user = User.findOne({
          where: { userId: review.userId },
          raw: true,
        })
        userPromises.push(user)
      })
      let userArray = await Promise.all(userPromises)
      console.log('user array test', userArray)
      allProps.users = userArray
      let numReviews = await Review.count({
        where: { propertyId: id },
      })
      allProps.totalReviews = numReviews
      return allProps
  } catch(e) {
    console.log('DB ERROR', e)
  }
}

module.exports = {
  top6,
}