'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Chat.belongsToMany(models.User, {through: models.Conversation})
      Chat.belongsTo(models.User, { foreignKey: "toUserId"})
      Chat.belongsTo(models.User, { foreignKey: "fromUserId"})
    }
  }
  Chat.init({
    fromUserId: DataTypes.INTEGER,
    toUserId: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    isRead: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Chat',
  });
  return Chat;
};
