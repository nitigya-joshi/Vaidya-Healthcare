const chai = require("chai");
const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const mongoose = require("mongoose");

const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");
const doctorControllers = require("../controllers/doctorControllers");

chai.use(sinonChai);
chai.should();

describe("Doctor Controller", () => {
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
      .then((result) => {
        const user = new User({
          _id: "690f66b979af55031b347269",
          name: "temp",
          username: "temporary",
          gender: "temp's gender",
          email: "temp@temp.com",
          password: "12345678",
        });
        return user.save();
      })
      .then((result) => {
        const doctor = new Doctor({
          _id: "5c0f66b979af55031b34728a",
          user: user._id.toString(),
          name: "Tester",
          category: "Testa",
          languages: ["English", "Hindi"],
          fee: 150,
          username: "tester",
          edu: "MBBS",
          approved: true,
          experience: 21,
          email: "test@test.com",
          clinicaddress: "Living on street",
          mobile: "12345678",
        });
        return doctor.save();
      })
      .then(() => {
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
  });

  describe("registerDoctor", () => {
    let req = {
      body: {
        name: null,
        category: null,
        languages: null,
        fee: null,
        edu: null,
        experience: null,
        email: null,
        mobile: null,
        clinicaddress: null,
        rating: null,
        pic: null,
      },
      user: {
        _id: null,
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
        return this;
      },
    };

    afterEach(() => {
      req = {
        body: {
          name: null,
          category: null,
          languages: null,
          fee: null,
          edu: null,
          experience: null,
          email: null,
          mobile: null,
          clinicaddress: null,
          rating: null,
          pic: null,
        },
        user: {
          _id: null,
        },
      };
      res.status(1351);
      res.send(null);
    });

    it("should send a response with status code 400 and throw an error of Doctor already exists", async () => {
      req.body.email = "test@test.com";
      const error = "Error: Doctor already exists";
      let calledError;
      const next = sinon.spy((args) => (calledError = args.toString()));

      try {
        await doctorControllers.registerDoctor(req, res, next);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(400);
      expect(next).to.have.been.called;
      expect(calledError).to.equal(error);
    });

    it("should send a response with the status code 201 and response should contain doctor application metadata", async () => {
      req.body.name = "temp";
      req.body.category = "temper";
      req.body.languages = ["English"];
      req.body.fee = 150;
      req.body.edu = "MBBS";
      req.body.experience = 21;
      req.body.email = "temp@temp.com";
      req.body.mobile = "123456789";
      req.body.clinicaddress = "Live in tic tac";
      req.body.rating = 0;
      req.body.pic = "pretty good";
      req.user._id = "690f66b979af55031b347269";

      try {
        await doctorControllers.registerDoctor(req, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(201);
      expect(res.responseSend).have.property("_id");
      expect(res.responseSend.name).to.equal("temp");
    });

    it("should send a response with status code 400 and throw an error of Error Occurred", async () => {
      sinon.stub(Doctor, "create");
      Doctor.create.returns(null);
      req.body.email = "";
      const error = "Error: Error Occurred";
      let calledError;
      const next = sinon.spy((args) => (calledError = args.toString()));

      try {
        await doctorControllers.registerDoctor(req, res, next);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(400);
      expect(next).to.have.been.called;
      expect(calledError).to.equal(error);
      Doctor.create.restore();
    });
  });

  describe("getDoctors", () => {
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
      res.status(1351);
      res.send(null);
    });

    it("should send a response with status code 201 and array doctors", async () => {
      try {
        await doctorControllers.getDoctors(null, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(201);
      expect(res.responseSend.length).to.greaterThan(0);
    });

    it("should send a response with status code 401 and throw an error of Cannot get users", async () => {
      sinon.stub(Doctor, "find");
      Doctor.find.returns(null);
      const error = "Error: Cannot get doctors";
      let calledError;
      const next = sinon.spy((args) => (calledError = args.toString()));

      try {
        await doctorControllers.getDoctors(null, res, next);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(400);
      expect(next).to.have.been.called;
      expect(calledError).to.equal(error);
      Doctor.find.restore();
    });
  });

  after((done) => {
    User.deleteMany({})
      .then(() => {
        return Doctor.deleteMany({});
      })
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
