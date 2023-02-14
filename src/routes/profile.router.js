const profile = require("express").Router();
const { readProfile, updateProfile } = require("../controller/profile.controller");
const authMiddleware = require("../middleware/auth.middlware");

profile.get("/", authMiddleware, readProfile);
profile.patch("/", authMiddleware, updateProfile);


module.exports = profile;


