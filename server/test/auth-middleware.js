const { expect } = require("chai");
const sinon = require("sinon");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const User = require("../models/userModel");
const authMiddleware = require("../middleware/authMiddleware");

describe("Auth Middleware", () => {
  let user;
  before((done) => {
    mongoose
      .connect("mongodb://127.0.0.1:27017/fsd-test")
      .then((result) => {
        user = new User({
          _id: "5c0f66b979af55031b34728a",
          name: "Tester",
          username: "tester",
          gender: "tester's gender",
          email: "test@test.com",
          password: "12345678",
        });
        return user.save();
      })
      .then(() => {
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
  });

  describe("auth", () => {
    it("should send a response with status code 401 and Invalid token!", (done) => {
      async function testAuth() {
        try {
          let nextFunctionCalled = false;
          const req = {
            cookies: {
              jwt: "VERIFY_ME",
            },
            user: null,
          };
          const res = {
            statusCode: 200,
            responseSent: null,
            status(code) {
              this.statusCode = code;
              return this;
            },
            send(response) {
              this.responseSent = response;
              return this;
            },
          };
          const next = () => (nextFunctionCalled = true);
          await authMiddleware.auth(req, res, next);
          expect(nextFunctionCalled).not.to.equal(true);
          expect(res.statusCode).to.equal(401);
          expect(res.responseSent).to.equal("Invalid token!");
          expect(req.user).to.equal(null);
          done();
        } catch (error) {
          console.log(error);
          expect(nextFunctionCalled).not.to.equal(true);
          expect(res.statusCode).to.equal(401);
          expect(res.responseSent).to.equal("Invalid token!");
          done();
        }
      }
      testAuth();
    });

    it("should call next function and and req.user should be user", (done) => {
      async function testAuth() {
        try {
          let nextFunctionCalled = false;
          const req = {
            cookies: {
              jwt: "VERIFY_ME",
            },
            user: null,
          };
          const res = {
            statusCode: 200,
            responseSent: null,
            status(code) {
              this.statusCode = code;
              return this;
            },
            send(response) {
              this.responseSent = response;
              return this;
            },
          };
          const next = () => (nextFunctionCalled = true);
          sinon.stub(jwt, "verify");
          jwt.verify.returns({ id: "5c0f66b979af55031b34728a" });
          await authMiddleware.auth(req, res, next);
          expect(nextFunctionCalled).to.equal(true);
          expect(res.statusCode).to.equal(200);
          expect(res.responseSent).to.equal(null);
          expect(req.user._id.toString()).to.equal(user._id.toString());
          jwt.verify.restore();
          done();
        } catch (error) {
          console.log(error);
          expect(nextFunctionCalled).to.equal(true);
          expect(res.statusCode).to.equal(200);
          expect(res.responseSent).to.equal(null);
          expect(req.user._id.toString()).to.equal(user._id.toString());
          jwt.verify.restore();
          done();
        }
      }
      testAuth();
    });

    it("should send a response with status code 500 and Something went wrong", (done) => {
      async function testAuth() {
        try {
          let nextFunctionCalled = false;
          const req = {
            cookies: {
              jwt: null,
            },
            user: null,
          };
          const res = {
            statusCode: 200,
            responseSent: null,
            status(code) {
              this.statusCode = code;
              return this;
            },
            send(response) {
              this.responseSent = response;
              return this;
            },
          };
          const next = () => (nextFunctionCalled = true);
          await authMiddleware.auth(req, res, next);
          expect(nextFunctionCalled).not.to.equal(true);
          expect(res.statusCode).to.equal(500);
          expect(res.responseSent).to.equal("Something went wrong");
          expect(req.user).to.equal(null);
          done();
        } catch (error) {
          console.log(error);
          expect(nextFunctionCalled).not.to.equal(true);
          expect(res.statusCode).to.equal(500);
          expect(res.responseSent).to.equal("Something went wrong");
          expect(req.user).to.equal(null);
          done();
        }
      }
      testAuth();
    });
  });

  describe("adminAuth", () => {
    it("should call next function and should not send any response", () => {
      let nextFunctionCalled = false;
      const req = {
        user: {
          isAdmin: true,
        },
      };
      const res = {
        statusCode: 500,
        responseSent: null,
        status(code) {
          this.statusCode = code;
          return this;
        },
        send(response) {
          this.responseSent = response;
          return this;
        },
      };
      const next = () => (nextFunctionCalled = true);
      authMiddleware.adminAuth(req, res, next);
      expect(nextFunctionCalled).to.equal(true);
      expect(res.statusCode).to.equal(500);
      expect(res.responseSent).to.equal(null);
    });

    it("should send a response with status code 401 and Unauthorized", () => {
      let nextFunctionCalled = false;
      const req = {
        user: {
          isAdmin: false,
        },
      };
      const res = {
        statusCode: 500,
        responseSent: null,
        status(code) {
          this.statusCode = code;
          return this;
        },
        send(response) {
          this.responseSent = response;
          return this;
        },
      };
      const next = () => (nextFunctionCalled = true);
      authMiddleware.adminAuth(req, res, next);
      expect(nextFunctionCalled).not.to.equal(true);
      expect(res.statusCode).to.equal(401);
      expect(res.responseSent).to.equal("Unauthorized");
    });
  });

  describe("doctorAuth", () => {
    it("should call next function and should not send any response", () => {
      let nextFunctionCalled = false;
      const req = {
        user: {
          isDoctor: true,
        },
      };
      const res = {
        statusCode: 500,
        responseSent: null,
        status(code) {
          this.statusCode = code;
          return this;
        },
        send(response) {
          this.responseSent = response;
          return this;
        },
      };
      const next = () => (nextFunctionCalled = true);
      authMiddleware.doctorAuth(req, res, next);
      expect(nextFunctionCalled).to.equal(true);
      expect(res.statusCode).to.equal(500);
      expect(res.responseSent).to.equal(null);
    });

    it("should send a response with status code 401 and Unauthorized", () => {
      let nextFunctionCalled = false;
      const req = {
        user: {
          isDoctor: false,
        },
      };
      const res = {
        statusCode: 500,
        responseSent: null,
        status(code) {
          this.statusCode = code;
          return this;
        },
        send(response) {
          this.responseSent = response;
          return this;
        },
      };
      const next = () => (nextFunctionCalled = true);
      authMiddleware.doctorAuth(req, res, next);
      expect(nextFunctionCalled).not.to.equal(true);
      expect(res.statusCode).to.equal(401);
      expect(res.responseSent).to.equal("Unauthorized");
    });
  });

  describe("checkUser", () => {
    it("should call next function with jwt token and res.locals.user should be NULL", (done) => {
      async function testCheckUser() {
        try {
          let nextFunctionCalled = false;
          const req = {
            cookies: {
              jwt: null,
            },
          };
          const res = {
            locals: {
              user: undefined,
            },
          };
          const next = () => (nextFunctionCalled = true);
          await authMiddleware.checkUser(req, res, next);
          expect(nextFunctionCalled).to.equal(true);
          expect(res.locals.user).to.equal(null);
          done();
        } catch (error) {
          expect(nextFunctionCalled).to.equal(true);
          expect(res.locals.user).to.equal(null);
          console.log(error);
          done();
        }
      }
      testCheckUser();
    });

    it("should call next function with jwt token and res.locals.user should be user", (done) => {
      async function testCheckUser() {
        try {
          let nextFunctionCalled = false;
          const req = {
            cookies: {
              jwt: "VERIFY_ME",
            },
          };
          const res = {
            locals: {
              user: undefined,
            },
          };
          const next = () => (nextFunctionCalled = true);
          sinon.stub(jwt, "verify");
          jwt.verify.returns({ id: "5c0f66b979af55031b34728a" });
          await authMiddleware.checkUser(req, res, next);
          expect(nextFunctionCalled).to.equal(true);
          expect(res.locals.user._id.toString()).to.equal(user._id.toString());
          jwt.verify.restore();
          done();
        } catch (error) {
          console.log(error);
          expect(nextFunctionCalled).to.equal(true);
          expect(res.locals.user).to.equal(user);
          jwt.verify.restore();
          done();
        }
      }
      testCheckUser();
    });

    it("should call next function with no jwt token and res.locals.user should be NULL", (done) => {
      async function testCheckUser() {
        try {
          let nextFunctionCalled = false;
          const req = {
            cookies: {
              jwt: null,
            },
          };
          const res = {
            locals: {
              user: undefined,
            },
          };
          const next = () => (nextFunctionCalled = true);
          await authMiddleware.checkUser(req, res, next);
          expect(nextFunctionCalled).to.equal(true);
          expect(res.locals.user).to.equal(null);
          done();
        } catch (error) {
          console.log(error);
          expect(nextFunctionCalled).to.equal(true);
          expect(res.locals.user).to.equal(null);
          done();
        }
      }
      testCheckUser();
    });
  });

  after((done) => {
    User.deleteMany({})
      .then(() => {
        return mongoose.disconnect();
      })
      .then(() => {
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
  });
});
