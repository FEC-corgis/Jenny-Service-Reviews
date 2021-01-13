const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: '',
})

sequelize.authenticate()
.then(() => console.log('Sequelize connected.'))
.catch(err => console.error('Unable to connect Sequelize.', err))