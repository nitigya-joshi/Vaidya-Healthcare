const chai = require("chai");
const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const mongoose = require("mongoose");

const User = require("../models/userModel");
const userController = require("../controllers/userControllers");

chai.use(sinonChai);
chai.should();

describe("User Controller", () => {
  let user;
  before((done) => {
    mongoose
      .connect(
        // "mongodb://127.0.0.1:27017/fsd-test"
        "mongodb+srv://completeNodeGuide:e7S9ME6cXDU3XUQE@cluster0.08pm440.mongodb.net/fsd-test?retryWrites=true&w=majority"
      )
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

  describe("logout", () => {
    it("should send a response with the status code 200, json response should be user and cookie should contain jwt token", async () => {
      const res = {
        responseCookie: null,
        statusCode: 1351,
        responseJson: null,
        cookie(key, value, obj) {
          this.responseCookie = {
            key: key,
            value: value,
            maxAge: obj.maxAge,
          };
          return this;
        },
        status(code) {
          this.statusCode = code;
          return this;
        },
        json(obj) {
          this.responseJson = obj;
          return this;
        },
      };

      try {
        await userController.logout(null, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(200);
      expect(res.responseJson.message).to.equal("logged out");
      expect(res.responseCookie.key).to.equal("jwt");
      expect(res.responseCookie.value).to.equal("");
      expect(res.responseCookie.maxAge).to.equal(1);
    });
  });

  describe("getUserData", () => {
    const req = {
      user: null,
    };
    const res = {
      statusCode: 1351,
      responseJson: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(response) {
        this.responseJson = response;
        return this;
      },
    };

    afterEach(() => {
      req.user = null;
      res.status(1351);
      res.json(null);
    });

    it("should send a response with the status code 200 and json response should be user", async () => {
      try {
        req.user = user;
        await userController.getUserData(req, res);
      } catch (error) {
        console.log(error);
      }
      expect(res.responseJson._id.toString()).to.equal(user._id.toString());
      expect(res.statusCode).to.equal(200);
    });

    it("should send a response with the status code 500 and json response should be no user found!", async () => {
      try {
        await userController.getUserData(req, res);
      } catch (error) {
        console.log(error);
      }
      expect(res.responseJson).to.equal("no user found!");
      expect(res.statusCode).to.equal(500);
    });
  });

  describe("uploadAvatar", () => {
    it("should send a response with the status true and path of uploaded profile pic", async () => {
      const req = {
        file: {
          path: "testing-path",
        },
        user: {
          pic: null,
          save() {
            return this;
          },
        },
      };
      const res = {
        status: false,
        path: null,
        send(obj) {
          this.status = obj.status;
          this.path = obj.path;
          return this;
        },
      };

      try {
        await userController.uploadAvatar(req, res);
      } catch (error) {
        console.log(error);
      }

      expect(req.user.pic).to.equal(`http://localhost:3000/${req.file.path}`);
      expect(res.status).to.equal(true);
    });
  });

  describe("getAllUsers", () => {
    const res = {
      statusCode: 1351,
      responseSend: null,
      status(code) {
        this.statusCode = code;
        return this;
      },
      send(response) {
        this.responseSend = response;
        return this;
      },
    };

    it("should send a response with status code 201 and array users", async () => {
      try {
        await userController.getAllUsers({}, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(201);
      expect(res.responseSend[0]._id.toString()).to.equal(
        "5c0f66b979af55031b34728a"
      );
    });

    it("should send a response with status code 400 and throw an error of Cannot get users", async () => {
      sinon.stub(User, "find");
      User.find.returns(null);
      const error = "Error: Cannot get users";
      let calledError = "";
      const next = sinon.spy((args) => (calledError = args.toString()));

      try {
        await userController.getAllUsers({}, res, next);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(400);
      expect(next).to.have.been.called;
      expect(calledError).to.equal(error);
      User.find.restore();
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
