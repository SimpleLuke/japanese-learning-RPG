const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require("../../models/users.model");

describe("/users", () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  afterEach(async () => {
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
      await request(app)
        .post("/users")
        .send({
          email: "tester@email.com",
          password: "1234",
          wordsLearnt: [],
          character: {
            attributes: {
              xp: 0,
              level: 0,
              wordsKnown: 0,
              coins: 0,
            },

            inventory: [],
            currentOutfit: {
              bottoms: "",
              shoes: "",
              hair: "",
              top: "",
              body: "",
            },
          },
        });
      let users = await User.find();
      let newUser = users[users.length - 1];
      expect(newUser.email).toEqual("tester@email.com");
      expect(newUser.wordsLearnt).toEqual([]);
      expect(newUser.character.attributes.xp).toEqual(0);
      expect(newUser.character.attributes.level).toEqual(0);
      expect(newUser.character.attributes.wordsKnown).toEqual(0);
      expect(newUser.character.inventory).toEqual([]);
      expect(newUser.character.currentOutfit).toEqual({
        bottoms: "",
        shoes: "",
        hair: "",
        top: "",
        body: "",
      });
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
      await request(app).post("/users").send({ email: "tester@email.com" });
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

  describe("/outfit", () => {
    beforeEach(async () => {
      const user = new User({
        email: "outfit@email.com",
        password: "1234",
        wordsLearnt: [],
        character: {
          attributes: {
            xp: 0,
            level: 0,
            wordsKnown: 0,
            coins: 0,
          },
          inventory: [],
          currentOutfit: {
            bottoms: "",
            shoes: "",
            hair: "",
            top: "",
            body: "",
          },
        },
      });
      await user.save();
    });
    test("POST /outfit", async () => {
      let response = await request(app)
        .post("/users/outfit")
        .send({
          email: "outfit@email.com",
          outfit: {
            body: "body",
            hair: "hair",
            top: "top",
            bottoms: "bottoms",
            shoes: "shoes",
          },
        });
      expect(response.status).toEqual(201);
      const user = await User.findOne({ email: "outfit@email.com" });
      expect(user.character.currentOutfit.body).toEqual("body");
      expect(user.character.currentOutfit.hair).toEqual("hair");
      expect(user.character.currentOutfit.top).toEqual("top");
      expect(user.character.currentOutfit.bottoms).toEqual("bottoms");
      expect(user.character.currentOutfit.shoes).toEqual("shoes");
    });

    test("POST /outfit/change", async () => {
      let response = await request(app)
        .post("/users/outfit/change")
        .send({
          email: "outfit@email.com",
          outfit: {
            top: "top",
          },
        });
      expect(response.status).toEqual(201);
      const user = await User.findOne({ email: "outfit@email.com" });
      expect(user.character.currentOutfit.top).toEqual("top");
    });
  });
});
