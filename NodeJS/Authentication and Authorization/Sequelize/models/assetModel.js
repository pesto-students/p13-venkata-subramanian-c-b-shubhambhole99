// models/AssetModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Asset = sequelize.define('Asset', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Asset;