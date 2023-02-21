const multer = require("multer");
const path = require("path");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//       return cb(new Error("Only image files are allowed!"), false);
//     } else {
//       const extension = file.originalname.split(".");
//       const ext = extension[extension.length - 1];
//       const filename = `${new Date().getDate()}_${new Date().getTime()}.${ext}`;
//       cb(null, filename);
//     }
//   },
// });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "gotickz",
    format: async (req, file) => path.extname(file.originalname).slice(1), // supports promises as well
    public_id: (req, file) => {
      const randomNumber = Math.round(Math.random() * 90000);
      const filename = `${randomNumber}${Date.now()}`;
      return filename;
    },
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true)
  } else {
    cb(new Error("Invalid file type"), false)
  }
}

const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter,
});

const uploadErrorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      res.status(400).json({
        success: false,
        message: "File size exceeded 2MB limit"
      })
    } else {
      res.status(400).json({
        success: false,
        message: err.message
      })
    }
  } else {
    res.status(500).json({
      success: false,
      message: err.message
    })
  }
}

module.exports = {
  upload,
  uploadErrorHandler,
  cloudinary
}
