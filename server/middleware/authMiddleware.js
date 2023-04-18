const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const auth = async (req, res, next) => {
  const token = req.cookies.jwt;
  let decodedToken;
  if (token) {
    try {
      decodedToken = jwt.verify(token, "jwtsecret");
    } catch (err) {
      console.log(err.message);
      return res.status(401).send("Invalid token!");
    }
    if (decodedToken) {
      const user = await User.findById(decodedToken.id);
      req.user = user;
      return next();
    }
  } else {
    return res.status(500).send("Something went wrong");
  }
};

const adminAuth = async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
const doctorAuth = async (req, res, next) => {
  if (req.user.isDoctor) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  let decodedToken;
  if (token) {
    try {
      decodedToken = jwt.verify(token, "jwtsecret");
    } catch (err) {
      res.locals.user = null;
      return next();
    }
    if (decodedToken) {
      const user = await User.findById(decodedToken.id);
      res.locals.user = user;
      return next();
    }
  } else {
    res.locals.user = null;
    return next();
  }
};

module.exports = { auth, checkUser, adminAuth, doctorAuth };
