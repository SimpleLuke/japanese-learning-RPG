const app = require("../../app");
const User = require("../../models/users.model");
const request = require("supertest");
require("../mongodb_helper");
const JWT = require("jsonwebtoken");

describe("/game", () => {
  beforeEach(async () => {
    await User.deleteMany({});
    const user = new User({
      email: "game@email.com",
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

  afterEach(async () => {
    await User.deleteMany({});
  });

  it("updates user stats", async () => {
    const tokenResponse = await request(app)
      .post("/tokens")
      .send({ email: "game@email.com", password: "1234" });
    const bearer = `Bearer ${tokenResponse.body.token}`;
    const response = await request(app)
      .post("/game/update")
      .set("Authorization", bearer)
      .send({
        email: "game@email.com",
        wordsLearnt: ["abc"],
        character: {
          attributes: {
            xp: 100,
            level: 2,
            wordsKnown: 10,
            coins: 100,
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
    expect(response.statusCode).toEqual(201);
    const user = await User.findOne({ email: "game@email.com" });
    expect(user.character.attributes.coins).toEqual(100);
    expect(user.character.attributes.xp).toEqual(100);
    expect(user.character.attributes.level).toEqual(2);
    expect(user.character.attributes.wordsKnown).toEqual(10);
  });

  it("should return a user's data if found", async () => {
    const token = JWT.sign({ user: "test" }, "SECRET");
    let response = await request(app)
    .post("/game/update")
    .set("Authorization", `Bearer ${token}`)
    .send(
      {
      email: "game@email.com", 
      wordsLearnt: [], 
      character: {
        attributes: {
          xp: 100,
          level: 2,
          wordsKnown: 10,
          coins: 100,
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
      })
      expect(response.status).toEqual(201);
      expect(response.body.message).toEqual("OK");
    });
});