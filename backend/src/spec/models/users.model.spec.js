const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/users.model");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has an email address", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
    });
    expect(user.password).toEqual("password");
  });

  it("can list all users", async () => {
    try {
      const users = await User.find();
      expect(users).toEqual([]);
    } catch (error) {
      console.log("list user error: ", error);
    }
  });

  it("can save a user", async () => {
    const user = new User({
      email: "someone@example.com",
      password: "password",
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

    try {
      await user.save();
      const users = await User.find();
      expect(users[0]).toMatchObject({
        email: "someone@example.com",
        password: "password",
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
    } catch (error) {
      console.log("save user error: ", error);
    }
  });
});
