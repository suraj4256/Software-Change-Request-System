const db = require('../config/db');
const {DataTypes} = require('sequelize');
const Role = require("./Role");

const User = db.define(
    'User',
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        email:{
           type:DataTypes.STRING,
           allowNull:false,
           unique:true
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        roleId:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:Role,
                key:'id'
            }
        }
    }
);

User.belongsTo(Role, {foreignKey: 'roleId', as:'role'});

module.exports = User;
