'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Languages', [
      {
        name: "English",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Spanish",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "French",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mandarin",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Hindi",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
