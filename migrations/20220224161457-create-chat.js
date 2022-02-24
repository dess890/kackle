'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fromUserID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        onDelete: "SET NULL"
      },
      toUserID: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      isRead: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Chats');
  }
};