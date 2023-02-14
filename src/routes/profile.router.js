const profile = require("express").Router();
const {
  readProfile,
  updateProfile,
} = require("../controllers/profile.controller");
const authMiddleware = require("../middlewares/auth.middlware");

profile.get("/", authMiddleware, readProfile);
profile.patch("/", authMiddleware, updateProfile);

module.exports = profile;
