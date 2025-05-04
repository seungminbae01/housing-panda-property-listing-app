const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('property_listings', 'housingpanda', 'password123', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;