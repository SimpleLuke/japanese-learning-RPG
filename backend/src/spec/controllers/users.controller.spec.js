const app = require("../../app");
const request = require("supertest");
require("../mongodb_helper");
const User = require("../../models/users.model");
const UsersController = require("../../routes/users/users.controller");

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
          email: "test@test.com",
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
      expect(newUser.email).toEqual("test@test.com");
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
        .send({ email: "test@test.com" });
      expect(response.statusCode).toBe(400);
    });

    test("does not create a user", async () => {
      await request(app).post("/users").send({ email: "test@test.com" });
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

    test("POST /outfit returns 400 error for missing email field", async () => {
      let response = await request(app)
        .post("/users/outfit")
        .send({
          outfit: {
            body: "body",
            hair: "hair",
            top: "top",
            bottoms: "bottoms",
            shoes: "shoes",
          },
        });
      expect(response.status).toEqual(400);
      expect(response.body.message).toEqual("Bad request");
    });
    
    test("POST /outfit/change returns 400 error for missing email field", async () => {
      let response = await request(app)
        .post("/users/outfit/change")
        .send({
          outfit: {
            body: "body",
            hair: "hair",
            top: "top",
            bottoms: "bottoms",
            shoes: "shoes",
          },
        });
      expect(response.status).toEqual(400);
      expect(response.body.message).toEqual("Bad request");
    });

  });
  describe("GetUserData function", () => {
    let req, res;
  
    beforeEach(() => {
      req = {
        query: {
          email: "test@example.com"
        }
      };
      res = {
        json: jest.fn(),
        status: jest.fn().mockReturnThis()
      };
    });
  
    afterEach(() => {
      jest.resetAllMocks();
    });
  
    it("should return a user's data if found", async () => {
      const user = {
        email: "test@example.com",
        name: "Test User",
        age: 30
      };
      User.findOne = jest.fn().mockResolvedValue(user);
  
      await UsersController.GetUserData(req, res);
  
      expect(User.findOne).toHaveBeenCalledWith({ email: "test@example.com" });
      expect(res.status).not.toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(user);
    });
  
    it("should return an error if the user is not found", async () => {
      User.findOne = jest.fn().mockResolvedValue(null);
  
      await UsersController.GetUserData(req, res);
  
      expect(User.findOne).toHaveBeenCalledWith({ email: "test@example.com" });
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "User not found" });
    });
  
    it("should return a server error if an exception is thrown", async () => {
      User.findOne = jest.fn().mockRejectedValue(new Error("Database error"));
  
      await UsersController.GetUserData(req, res);
  
      expect(User.findOne).toHaveBeenCalledWith({ email: "test@example.com" });
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Server error" });
    });
  });
});
