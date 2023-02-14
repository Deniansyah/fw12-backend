const profile = require("express").Router();
const { readProfile } = require("../controller/profile.controller");
const authMiddleware = require("../middleware/auth.middleware");

profile.get("/", authMiddleware, readProfile);

module.exports = profile;


