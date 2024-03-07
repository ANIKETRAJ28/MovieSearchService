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
    await queryInterface.bulkInsert('Theaters', [
      {
        name: "Regal Cinemas",
        seats: 200,
        city: "New York",
        location: "Times Square",
        ratings: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "AMC Theatres",
        seats: 180,
        city: "Los Angeles",
        location: "Hollywood",
        ratings: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Cinemark Theatres",
        seats: 150,
        city: "Chicago",
        location: "Downtown",
        ratings: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Vue Cinemas",
        seats: 220,
        city: "London",
        location: "West End",
        ratings: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Golden Village",
        seats: 180,
        city: "Singapore",
        location: "VivoCity",
        ratings: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Cineplex",
        seats: 160,
        city: "Toronto",
        location: "Downtown",
        ratings: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Hoyts Cinemas",
        seats: 190,
        city: "Sydney",
        location: "George Street",
        ratings: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "UGC Ciné Cité",
        seats: 170,
        city: "Paris",
        location: "Champs-Élysées",
        ratings: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "PVR Cinemas",
        seats: 210,
        city: "Mumbai",
        location: "Phoenix Marketcity",
        ratings: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "CGV Cinemas",
        seats: 200,
        city: "Seoul",
        location: "Gangnam",
        ratings: 4,
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
