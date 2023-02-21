const profile = require("express").Router();
const {
  readProfile,
  updateProfile,
  uploadPicture
} = require("../controllers/profile.controller");
const authMiddleware = require("../middlewares/auth.middlware");
const multer = require("multer")

const upload = multer({
  dest: "upload/"
})

profile.patch("/upload", authMiddleware, upload.single("picture"), uploadPicture )

profile.get("/", authMiddleware, readProfile);
profile.patch("/", authMiddleware, updateProfile);

module.exports = profile;
