const profile = require("express").Router();
const {
  readProfile,
  updateProfile,
  uploadPicture,
} = require("../controllers/profile.controller");
const authMiddleware = require("../middlewares/auth.middlware");
const multer = require("multer");

const {
  upload: uploadMiddleware,
  uploadErrorHandler,
} = require("../middlewares/upload.middleware");

const upload = uploadMiddleware.single("picture");

profile.patch(
  "/upload",
  authMiddleware,
  upload,
  uploadErrorHandler,
  uploadPicture
);

profile.get("/", authMiddleware, readProfile);
profile.patch("/", authMiddleware, updateProfile);

module.exports = profile;
