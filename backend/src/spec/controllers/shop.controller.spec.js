const app = require("../../app");
const User = require("../../models/users.model");
const request = require("supertest");
require("../mongodb_helper");

describe("/shop", () => {
  describe("/shop/purchase", () => {
    beforeEach(async () => {
      await User.deleteMany({});
      const user = new User({
        email: 'shop@email.com',
        password: '1234',
        wordsLearnt: [],
        character: {
          attributes: {
            xp: 0,
            level: 0,
            wordsKnown: 0,
            coins: 40,
          },
          inventory: [],
          currentOutfit: {
            body: '',
            hair: '',
            top: '',
            bottoms: '',
            shoes: '',
          },
        },
      });
      await user.save();
    });

    afterEach(async () => {
      await User.deleteMany({});
    });

    it("bad request throws error", async () => {
      const response = await request(app)
        .post("/shop/purchase")
        .send({ email: "shop@email.com", item: "tshirt-green", cost: 40 });
      expect(response.statusCode).toEqual(201);
      const user = await User.findOne({ email: "shop@email.com" });
      expect(user.character.inventory.length).toEqual(1);
      expect(user.character.attributes.coins).toEqual(0);
    });
    it("sends a bad request and error is thrown", async () => {
      const response = await request(app)
        .post("/shop/purchase")
        .send({ email: "hello@email.com", item: "tshirt-green", cost: 40 });
      expect(response.statusCode).toEqual(400);
      expect(response.json).toBeDefined
    });
  });
});
