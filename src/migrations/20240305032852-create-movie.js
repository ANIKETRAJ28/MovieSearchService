'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false,
        unique: true
      },
      duration: {
        type: Sequelize.TIME,
        required: true,
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING,
        required: true,
        allowNull: false
      },
      price: {
        type: Sequelize.INTEGER,
        required: true,
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
    await queryInterface.dropTable('Movies');
  }
};