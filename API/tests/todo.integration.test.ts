import request from "supertest";
import { app, server } from "../app";
import dbMain from "../database/models";

beforeAll(async () => {
  await dbMain.sequelize.sync({ force: true }); // reset schema
});

afterAll(async () => {
  await dbMain.sequelize.close();
  server.close(); // close the server
});

describe("Todo Integration Tests", () => {
  it("should create a todo", async () => {
    const res = await request(app)
      .post("/api/v1/todo")
      .send({ title: "Test", description: "Integration test" });

    expect(res.status).toBe(201);
    expect(res.body.message).toBe("Todo created successfully.");
  });

  it("should fetch todos", async () => {
    const res = await request(app).get("/api/v1/todo");
    expect(res.status).toBe(200);
    expect(res.body.data.length).toBeGreaterThanOrEqual(1);
  });

  it("should update a todo", async () => {
    const todo = await dbMain.Todo.create({
      title: "Old",
      description: "Desc",
    });

    const res = await request(app)
      .put(`/api/v1/todo/${todo.id}`)
      .send({ title: "Updated", description: "Updated", done: true });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Todo updated successfully.");

    const updatedTodo = await dbMain.Todo.findByPk(todo.id);
    expect(updatedTodo.title).toBe("Updated");
    expect(updatedTodo.description).toBe("Updated");
  });

  it("should delete a todo", async () => {
    const todo = await dbMain.Todo.create({
      title: "ToDelete",
      description: "Desc",
    });

    const res = await request(app).delete(`/api/v1/todo/${todo.id}`);
    expect(res.status).toBe(204);

    const deletedTodo = await dbMain.Todo.findByPk(todo.id);
    expect(deletedTodo).toBeNull();
  });
});
