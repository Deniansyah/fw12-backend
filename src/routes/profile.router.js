const profile = require("express").Router();
const {
  readProfile,
  updateProfile,
  uploadPicture
} = require("../controllers/profile.controller");
const authMiddleware = require("../middlewares/auth.middlware");
const multer = require("multer")

const upload = require("../middlewares/upload.middleware")

profile.patch("/upload", authMiddleware, upload, uploadPicture )

profile.get("/", authMiddleware, readProfile);
profile.patch("/", authMiddleware, updateProfile);

module.exports = profile;
