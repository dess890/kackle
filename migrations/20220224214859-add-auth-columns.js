'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users', 'twitterAuth', Sequelize.JSONB)
    await queryInterface.addColumn('Users', 'facebookAuth', Sequelize.JSONB)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Users', 'twitterAuth', Sequelize.JSONB)
    await queryInterface.removeColumn('Users', 'facebookAuth', Sequelize.JSONB)
  }
};
