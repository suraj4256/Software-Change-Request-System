const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const ChangeRequest = require("./ChangeRequest");

const Timeline = sequelize.define("Timeline", {
  stage: { type: DataTypes.STRING, allowNull: false },
  startDate: { type: DataTypes.DATE },
  endDate: { type: DataTypes.DATE },
  comment: { type: DataTypes.TEXT },
});

Timeline.belongsTo(ChangeRequest, {
  foreignKey: "changeRequestId",
  as: "changeRequest",
});

module.exports = Timeline;
