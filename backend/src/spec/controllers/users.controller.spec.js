const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require("../../models/users.model");

describe("/users", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe("POST, when email and password are provided", () => {
    test("the response code is 201", async () => {
      let response = await request(app)
        .post("/users")
        .send({ email: "poppy@email.com", password: "1234" });
      expect(response.statusCode).toBe(201);
    });

    test("a user is created", async () => {
      await request(app).post("/users").send({
        email: "tester@email.com",
        password: "1234",
      });
      let users = await User.find();
      let newUser = users[users.length - 1];
      expect(newUser.email).toEqual("tester@email.com");
    });
  });

  describe("POST, when fields are missing", () => {
    test("response code is 400", async () => {
      let response = await request(app)
        .post("/users")
        .send({ email: "test@email.com" });
      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ email: "test@email.com" });
      let users = await User.find();
      expect(users.length).toEqual(0);
    });
  });

  describe("POST, when email is missing", () => {
    test("response code is 400", async () => {
      let response = await request(app)
        .post("/users")
        .send({ password: "1234" });
      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ password: "1234" });
      let users = await User.find();
      expect(users.length).toEqual(0);
    });
  });
});