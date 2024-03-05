'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Theaters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      seats: {
        type: Sequelize.INTEGER,
        require: true,
        allowNull: false
      },
      city: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false
      },
      ratings: {
        type: Sequelize.ENUM,
        values: ['1', '2', '3', '4', '5'],
        required: true,
        allowNull: false
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
    await queryInterface.dropTable('Theaters');
  }
};