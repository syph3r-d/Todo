"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const todos = [
      {
        id: 1,
        title: "Learn Node.js",
        description: "Learn Node.js and Express.js",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: "Build a REST API",
        description: "Create a RESTful API using Express.js and Sequelize",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: "Explore Next.js",
        description: "Understand Next.js for server-side rendering",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: "Read about WebSockets",
        description: "Learn how WebSockets work for real-time communication",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        title: "Write Unit Tests",
        description: "Implement Jest tests for the backend API",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: "Deploy to Heroku",
        description: "Deploy the Node.js app to Heroku with PostgreSQL",
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    // Iterate over each todo item and insert if not exists
    for (const todo of todos) {
      const existingTodo = await queryInterface.rawSelect(
        "Todos",
        { where: { id: todo.id } },
        ["id"]
      );

      // Insert only if the todo doesn't already exist
      if (!existingTodo) {
        await queryInterface.bulkInsert("Todos", [todo], {});
      }
    }
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
