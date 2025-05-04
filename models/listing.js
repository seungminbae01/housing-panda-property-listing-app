const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const Listing = db.define('listing', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  rent: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rooms: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  contact_info: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Listing;