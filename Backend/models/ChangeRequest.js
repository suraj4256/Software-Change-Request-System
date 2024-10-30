const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const ChangeRequest = sequelize.define('ChangeRequest', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  priority: { type: DataTypes.STRING, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'Pending' }
});

ChangeRequest.belongsTo(User, { foreignKey: 'requesterId', as: 'requester' });

module.exports = ChangeRequest;