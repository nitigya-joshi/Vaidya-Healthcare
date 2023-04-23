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
        "mongodb+srv://sudeep:fsdproject@cluster0.hohd1.mongodb.net/vaidya-healthcare-test?retryWrites=true&w=majority"
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

  describe("registerUser", () => {
    let req = {
      body: {
        name: null,
        username: null,
        gender: null,
        email: null,
        password: null,
        mobile: null,
        address: null,
        pic: null,
        appointments: null,
      },
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
      req = {
        body: {
          name: null,
          username: null,
          gender: null,
          email: null,
          password: null,
          mobile: null,
          address: null,
          pic: null,
          appointments: null,
        },
      };
      res.status(1351);
      res.json(null);
    });

    it("should send a response with the status code 400 and throw an Error: User already exists", async () => {
      req.body.email = "test@test.com";
      const error = "Error: User already exists";
      let calledError;
      const next = sinon.spy((args) => (calledError = args.toString()));

      try {
        await userController.registerUser(req, res, next);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(400);
      expect(next).to.have.been.called;
      expect(calledError).to.equal(error);
    });

    it("should send a response with the status code 201 and response should contain user property", async () => {
      req.body.name = "Temp";
      req.body.username = "temporary";
      req.body.gender = "temp";
      req.body.email = "temp@temp.com";
      req.body.password = "12345678";
      req.body.mobile = "12345678";
      req.body.address = "I live temporary";
      req.body.pic = "pretty ugly";
      req.body.appointments = 0;

      try {
        await userController.registerUser(req, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(201);
      expect(res.responseJson).have.property("user");
    });

    it("should send a response with the status code 201 and response should contain user property", async () => {
      sinon.stub(User, "create");
      User.create.returns(null);
      req.body.email = "test@temp.com";
      const error = "Error: Error Occurred";
      let calledError;
      const next = sinon.spy((args) => (calledError = args.toString()));

      try {
        await userController.registerUser(req, res, next);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(400);
      expect(next).to.have.been.called;
      expect(calledError).to.equal(error);
      User.create.restore();
    });
  });

  // describe("authUser", () => {
  //   const req = {
  //     body: {
  //       email: "",
  //       password: "",
  //     },
  //   };
  //   const res = {
  //     responseCookie: null,
  //     statusCode: 1351,
  //     responseJson: null,
  //     status(code) {
  //       this.statusCode = code;
  //       return this;
  //     },
  //     cookie(key, value, obj) {
  //       this.responseCookie = {
  //         key: key,
  //         value: value,
  //         httpOnly: obj.httpOnly,
  //         maxAge: obj.maxAge,
  //       };
  //       return this;
  //     },
  //     json(response) {
  //       this.responseJson = response;
  //       return this;
  //     },
  //   };

  //   afterEach(() => {
  //     req.body.email = "";
  //     req.body.password = "";
  //     res.responseCookie = null;
  //     res.status(1351);
  //     res.json(null);
  //   });

  //   it("should send a response with the status code 200 and json response should contain SUCCESS status and user", async () => {
  //     req.body.email = "test@test.com";
  //     req.body.password = "12345678";

  //     try {
  //       user.verified = true;
  //       await user.save();
  //       await userController.authUser(req, res);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     try {
  //       user.verified = false;
  //       await user.save();
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     expect(res.statusCode).to.equal(200);
  //     expect(res.responseJson).to.have.property("status");
  //     expect(res.responseJson.status).to.equal("SUCCESS");
  //     expect(res.responseJson).to.have.property("user");
  //     expect(res.responseJson.user._id.toString()).to.equal(
  //       user._id.toString()
  //     );
  //   });

  //   it('should send a response with the status code 400 and json response should contain status="FAILED" and message="Email is not verified. Check your inbox!"', async () => {
  //     req.body.email = "test@test.com";
  //     req.body.password = "12345678";

  //     try {
  //       await userController.authUser(req, res);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     expect(res.statusCode).to.equal(400);
  //     expect(res.responseJson).to.have.property("status");
  //     expect(res.responseJson.status).to.equal("FAILED");
  //     expect(res.responseJson).to.have.property("message");
  //     expect(res.responseJson.message).to.equal(
  //       "Email is not verified. Check your inbox!"
  //     );
  //   });

  //   it('should send a response with the status code 400 and json response should contain status="FAILED" and message="Invalid email or password"', async () => {
  //     try {
  //       await userController.authUser(req, res);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     expect(res.statusCode).to.equal(400);
  //     expect(res.responseJson).to.have.property("status");
  //     expect(res.responseJson.status).to.equal("FAILED");
  //     expect(res.responseJson).to.have.property("message");
  //     expect(res.responseJson.message).to.equal("Invalid email or password");
  //   });
  // });

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

  describe("updateUser", () => {
    let req = {
      body: {
        name: null,
        email: null,
        username: null,
        mobile: null,
        address: null,
      },
      user: user,
    };
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

    afterEach(() => {
      req = {
        body: {
          name: null,
          email: null,
          username: null,
          mobile: null,
          address: null,
        },
        user: user,
      };
      res.status(1351);
      res.send(null);
    });

    it("should send a response with the status code 400 and response should have property error with value Invalid Updates!", async () => {
      req.body.test = "test";

      try {
        await userController.updateUser(req, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(400);
      expect(res.responseSend).have.property("error");
      expect(res.responseSend.error).to.equal("Invalid Updates!");
    });

    it("should send a response with req.user", async () => {
      req.body.name = "Tester";
      req.body.email = "test@test.com";
      req.body.username = "tester";
      req.body.mobile = "12345678";
      req.body.address = "testingLoc";

      try {
        await userController.updateUser(req, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(1351);
      expect(res.responseSend._id.toString()).to.equal(req.user._id.toString());
    });
  });

  // describe("uploadAvatar", () => {
  //   it("should send a response with the status true and path of uploaded profile pic", async () => {
  //     const req = {
  //       file: {
  //         path: "testing-path",
  //       },
  //       user: {
  //         pic: null,
  //         save() {
  //           return this;
  //         },
  //       },
  //     };
  //     const res = {
  //       status: false,
  //       path: null,
  //       send(obj) {
  //         this.status = obj.status;
  //         this.path = obj.path;
  //         return this;
  //       },
  //     };

  //     try {
  //       await userController.uploadAvatar(req, res);
  //     } catch (error) {
  //       console.log(error);
  //     }

  //     expect(req.user.pic).to.equal(`${process.env.SERVER_URL}/${req.file.path}`);
  //     expect(res.status).to.equal(true);
  //   });
  // });

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

  describe("deleteUser", () => {
    it("should send a response with status code 200 and response should be status with success and remaining users", async () => {
      const req = {
        body: {
          mongo_ids: [],
        },
      };
      const res = {
        statusCode: 1351,
        responseSend: null,
        status(code) {
          this.statusCode = code;
          return this;
        },
        send(response) {
          this.responseSend = response;
        },
      };

      try {
        await userController.deleteUser(req, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(200);
      expect(res.responseSend).have.property("status");
      expect(res.responseSend.status).to.equal("success");
      expect(res.responseSend).have.property("remaining");
      expect(res.responseSend.remaining.length).to.greaterThan(0);
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
