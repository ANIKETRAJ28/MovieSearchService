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
    await queryInterface.bulkInsert('MovieTheaters', [
      {
        movieId: 2,
        theaterId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 3,
        theaterId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 6,
        theaterId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 4,
        theaterId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 9,
        theaterId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 8,
        theaterId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 10,
        theaterId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 1,
        theaterId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 5,
        theaterId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 4,
        theaterId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 7,
        theaterId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        theaterId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 8,
        theaterId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 1,
        theaterId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 5,
        theaterId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 10,
        theaterId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 7,
        theaterId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        theaterId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 1,
        theaterId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 3,
        theaterId: 4,
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
