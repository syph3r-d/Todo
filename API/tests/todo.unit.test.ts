import request from "supertest";
import { app, server } from "../app";
import dbMain from "../database/models";

jest.mock("../database/models");

describe("Todo Controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    server.close();
  });

  describe("POST /todo", () => {
    it("should create a todo successfully", async () => {
      (dbMain.Todo.create as jest.Mock).mockResolvedValueOnce({});
      const response = await request(app)
        .post("/api/v1/todo")
        .send({ title: "Test Todo", description: "Test description" });

      expect(response.status).toBe(201);
      expect(response.body.message).toBe("Todo created successfully.");
    });

    it("should fail with validation error", async () => {
      const response = await request(app).post("/api/v1/todo").send({});
      expect(response.status).toBe(400);
    });
  });

  describe("GET /todo", () => {
    it("should fetch todo", async () => {
      (dbMain.Todo.findAll as jest.Mock).mockResolvedValueOnce([]);
      const response = await request(app).get("/api/v1/todo");

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });
  });

  describe("PUT /todo/:id", () => {
    it("should update a todo", async () => {
      const fakeTodo = {
        update: jest.fn().mockResolvedValue({}),
      };
      (dbMain.Todo.findByPk as jest.Mock).mockResolvedValue(fakeTodo);

      const response = await request(app)
        .put("/api/v1/todo/1")
        .send({ title: "Updated", description: "Updated", done: true });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Todo updated successfully.");
    });

    it("should return 404 for non-existing todo", async () => {
      (dbMain.Todo.findByPk as jest.Mock).mockResolvedValue(null);
      const response = await request(app)
        .put("/api/v1/todo/999")
        .send({ title: "Updated", description: "Updated", done: true });

      expect(response.status).toBe(404);
    });
  });

  describe("DELETE /todo/:id", () => {
    it("should delete a todo", async () => {
      const fakeTodo = { destroy: jest.fn().mockResolvedValue({}) };
      (dbMain.Todo.findByPk as jest.Mock).mockResolvedValue(fakeTodo);

      const response = await request(app).delete("/api/v1/todo/1");
      expect(response.status).toBe(204);
    });

    it("should return 404 for non-existing todo", async () => {
      (dbMain.Todo.findByPk as jest.Mock).mockResolvedValue(null);

      const response = await request(app).delete("/api/v1/todo/999");
      expect(response.status).toBe(404);
    });
  });
});
