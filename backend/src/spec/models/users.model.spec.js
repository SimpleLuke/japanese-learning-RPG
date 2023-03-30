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
    });

    try {
      await user.save();
      const users = await User.find();
      expect(users[0]).toMatchObject({
        email: "someone@example.com",
        password: "password",
      });
    } catch (error) {
      console.log("save user error: ", error);
    }
  });
});
