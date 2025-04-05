"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const todos = [
      {
        title: "Learn Node.js",
        description: "Learn Node.js and Express.js",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Build a REST API",
        description: "Create a RESTful API using Express.js and Sequelize",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Explore Next.js",
        description: "Understand Next.js for server-side rendering",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Read about WebSockets",
        description: "Learn how WebSockets work for real-time communication",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Write Unit Tests",
        description: "Implement Jest tests for the backend API",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Deploy to Heroku",
        description: "Deploy the Node.js app to Heroku with PostgreSQL",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert("Todos", todos, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
