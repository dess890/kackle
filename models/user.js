'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsToMany(models.Chat, {through: models.Conversation})
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    twitterId: DataTypes.STRING,
    facebookId: DataTypes.STRING,
    twitterAuth: DataTypes.JSONB,
    facebookAuth: DataTypes.JSONB

  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};