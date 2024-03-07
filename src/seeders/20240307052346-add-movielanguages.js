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
    await queryInterface.bulkInsert('MovieLanguages', [
      {
        movieId: 1,
        LanguageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 1,
        LanguageId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 1,
        LanguageId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 1,
        LanguageId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 1,
        LanguageId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        LanguageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        LanguageId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        LanguageId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        LanguageId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 2,
        LanguageId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 3,
        LanguageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 3,
        LanguageId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 3,
        LanguageId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 3,
        LanguageId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 3,
        LanguageId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 4,
        LanguageId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 4,
        LanguageId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 4,
        LanguageId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 4,
        LanguageId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        movieId: 4,
        LanguageId: 5,
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
