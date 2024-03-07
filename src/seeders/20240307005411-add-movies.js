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
    await queryInterface.bulkInsert('Movies', [
      {
        name: 'Inception',
        duration: "02:28:00",
        genre: "Sci-Fi, Action",
        price: 740,
        ratings: "4",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'The Shawshank Redemption',
        duration: "02:32:00",
        genre: "Drama",
        price: 530,
        ratings: "5",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'The Dark Knight',
        duration: "02:22:00",
        genre: "Action, Crime, Drama",
        price: 560,
        ratings: "4",
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: "Forrest Gump",
        duration: "02:22:00",
        genre: "Drama, Romance",
        price: 350,
        ratings: "4",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        name: "Pulp Fiction",
        duration: "02:34:00",
        genre: "Crime, Drama",
        price: 640,
        ratings: "4",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        name: "The Godfather",
        duration: "02:55:00",
        genre: "Crime, Drama",
        price: 620,
        ratings: "4",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        name: "The Matrix",
        duration: "02:16:00",
        genre: "Sci-Fi, Action",
        price: 830,
        ratings: "4",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        name: "Interstellar",
        duration: "02:49:00",
        genre: "Sci-Fi, Adventure",
        price: 920,
        ratings: "4",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        name: "Fight Club",
        duration: "02:19:00",
        genre: "Drama",
        price: 730,
        ratings: "4",
        createdAt: new Date(),
        updatedAt: new Date()

    },
    {
        name: "The Lord of the Rings: The Fellowship of the Ring",
        duration: "02:58:00",
        genre: "Adventure, Fantasy",
        price: 960,
        ratings: "4",
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
