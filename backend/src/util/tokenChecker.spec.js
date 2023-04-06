const JWT = require("jsonwebtoken");

describe("tokenChecker", () => {
  it("should call next middleware if token is valid", async () => {
    const validToken = JWT.sign({ user: "test" }, "SECRET");
    const nextMiddleware = jest.fn();
    const req = {
      headers: { authorization: `Bearer ${validToken}` },
    };
    const res = {};
    const next = nextMiddleware;

    await tokenChecker(req, res, next);

    expect(nextMiddleware).toHaveBeenCalled();
    expect(req.decoded.user).toBe("test");
  });

  it("should return 401 if authorization header is missing", async () => {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: 'email',
        wordsLearnt: 'wordsLearnt',
        character: 'character',
      }),
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next = jest.fn();
  
    await tokenChecker(req, res, next);
  
    expect(res.status).toBeCalledWith(401);
    expect(res.json).toBeCalledWith({ error: "Authorization header is missing" });
  });

  it("should return 401 if token is invalid", async () => {
    const invalidToken = JWT.sign({ user: "test" }, "INVALID_SECRET");
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${invalidToken}`
      },
      body: JSON.stringify({
        email: 'email',
        wordsLearnt: 'wordsLearnt',
        character: 'character',
      }),
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
    const next = jest.fn();
  
    await tokenChecker(req, res, next);
  
    expect(res.status).toBeCalledWith(401);
    expect(res.json).toBeCalledWith({ error: 'Token is not valid' });
  });
  
});
