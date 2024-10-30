const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Team = sequelize.define('Team', {
  name: { type: DataTypes.STRING, allowNull: false }
});

Team.hasMany(User, { as: 'developers' });

module.exports = Team;