const chai = require("chai");
const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const mongoose = require("mongoose");

const User = require("../models/userModel");
const Doctor = require("../models/doctorModel");
const contact = require("../models/contactModel");
const AppointmentModel = require("../models/appointmentModel");
const apiControllers = require("../controllers/apiControllers");

chai.use(sinonChai);
chai.should();

describe("Api Controller", () => {
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

  describe("postContactData", () => {
    let req = {
      body: {
        name: null,
        email: null,
        phone: null,
        message: null,
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
          email: null,
          phone: null,
          message: null,
        },
      };
      res.status(1351);
      res.send(null);
    });

    it("should send a response with status code 201 and object of contact model", async () => {
      req.body.name = "tester";
      req.body.email = "test@test.com";
      req.body.phone = "9876543210";
      req.body.message = "just testing";
      try {
        await apiControllers.postContactData(req, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(201);
      expect(res.responseSend).have.property("_id");
    });

    it("should send a response with status code 401 and throw an error of Error Occurred", async () => {
      sinon.stub(contact, "create");
      contact.create.returns(null);
      req.body.name = "tester";
      req.body.email = "test@test.com";
      req.body.phone = "9876543210";
      req.body.message = "just testing";
      const error = "Error: Error Occurred";
      let calledError;
      const next = sinon.spy((args) => (calledError = args.toString()));

      try {
        await apiControllers.postContactData(req, res, next);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(400);
      expect(next).to.have.been.called;
      expect(calledError).to.equal(error);
      contact.create.restore();
    });
  });

  describe("bookAppointment", () => {
    let req = {
      body: {
        name: null,
        mobile: null,
        email: null,
        gender: null,
        state: null,
        city: null,
        reason: null,
        dob: null,
        age: null,
        appointmentDate: null,
        appointmentTime: null,
      },
      user: {
        _id: null,
      },
      query: { id: null },
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
          mobile: null,
          email: null,
          gender: null,
          state: null,
          city: null,
          reason: null,
          dob: null,
          age: null,
          appointmentDate: null,
          appointmentTime: null,
        },
        user: {
          _id: null,
        },
        query: { id: null },
      };
      res.status(1351);
      res.json(null);
    });

    it("should send a response with the status code 201 and json response should contain ok status and appointmentId", async () => {
      req.body.name = "test";
      req.body.mobile = 9876543210;
      req.body.email = "test@test.com";
      req.body.gender = "test's gender";
      req.body.state = "test's state";
      req.body.city = "test's city";
      req.body.reason = "just for fun";
      req.body.dob = new Date();
      req.body.age = 21;
      req.body.appointmentDate = new Date();
      req.body.appointmentTime = new Date();
      req.user._id = "690f66b979af55031b347269";
      req.query.id = "5c0f66b979af55031b34728a";

      try {
        await apiControllers.bookAppointment(req, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(201);
      expect(res.responseJson).have.property("status");
      expect(res.responseJson.status).to.equal("ok");
      expect(res.responseJson).have.property("appointmentId");
    });

    it("should send a response with status code 400 and throw an error of Error booking an appointment", async () => {
      sinon.stub(AppointmentModel, "create");
      AppointmentModel.create.returns(null);
      req.body.name = "test";
      req.body.mobile = 9876543210;
      req.body.email = "test@test.com";
      req.body.gender = "test's gender";
      req.body.state = "test's state";
      req.body.city = "test's city";
      req.body.reason = "just for fun";
      req.body.dob = new Date();
      req.body.age = 21;
      req.body.appointmentDate = new Date();
      req.body.appointmentTime = new Date();
      req.user._id = "690f66b979af55031b347269";
      req.query.id = "5c0f66b979af55031b34728a";
      const error = "Error: Error booking an appointment";
      let calledError;
      const next = sinon.spy((args) => (calledError = args.toString()));

      try {
        await apiControllers.bookAppointment(req, res, next);
      } catch (error) {
        console.log(error);
      }

      expect(res.statusCode).to.equal(400);
      expect(next).to.have.been.called;
      expect(calledError).to.equal(error);
      AppointmentModel.create.restore();
    });
  });

  describe("getAppointments", () => {
    const req = {
      user: {
        _id: null,
      },
    };

    const res = {
      responseSend: null,
      send(response) {
        this.responseSend = response;
        return this;
      },
    };

    afterEach(() => {
      req.user._id = null;
      res.send(null);
    });

    it("should send a response of appointments for the particular user", async () => {
      req.user._id = "690f66b979af55031b347269";

      try {
        await apiControllers.getAppointments(req, res);
      } catch (error) {
        console.log(error);
      }

      expect(res.responseSend.length).to.greaterThan(0);
    });

    it("should throw an error of Cannot fetch appointments", async () => {
      sinon.stub(AppointmentModel, "find").returns({
        populate: sinon.stub().returns(null),
      });
      const error = "Error: Cannot fetch appointments";
      let calledError;
      const next = sinon.spy((args) => (calledError = args.toString()));

      try {
        await apiControllers.getAppointments(req, res, next);
      } catch (error) {
        console.log(error);
      }

      expect(next).to.have.been.called;
      expect(calledError).to.equal(error);
      AppointmentModel.find.restore();
    });
  });

  after((done) => {
    User.deleteMany({})
      .then(() => {
        return AppointmentModel.deleteMany({});
      })
      .then(() => {
        return contact.deleteMany({});
      })
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
