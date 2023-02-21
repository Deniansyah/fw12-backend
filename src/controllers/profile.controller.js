const { selectUser, changeUser } = require("../models/users.model");
const { cloudinary } = require("../middlewares/upload.middleware");

exports.readProfile = (req, res) => {
  selectUser(req.userData.id, (err, data) => {
    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Profile by token not found",
      });
    }
    console.log(data.rows[0])
    return res.status(200).json({
      success: true,
      message: "Get profile user by token",
      results: data.rows[0],
    });
  });
};

exports.updateProfile = (req, res) => {
  changeUser(req.userData.id, req.body, (err, result) => {
    if (err) {
      console.log(err);
    }

    return res.status(200).json({
      success: true,
      message: `User updated`,
      results: result.rows[0],
    });
  });
};

exports.uploadPicture = (req, res) => {
  if (req.file) {
    req.body.picture = req.file.path;
    selectUser(req.userData.id, (err, data) => {
      if (data.rows[0].results.picture === null) {
        changeUser(req.userData.id, req.body, (err, result) => {
          if (err) {
            console.log(err);
          }

          return res.status(200).json({
            success: true,
            message: `Upload picture success!`,
          });
        });
      } else {
        const fileName = data?.picture?.split("/").pop()?.split(".")[0];
        cloudinary.uploader.destroy(`gotickz/${fileName}`);
        changeUser(req.userData.id, req.body, (err, result) => {
          if (err) {
            console.log(err);
          }

          return res.status(200).json({
            success: true,
            message: `Upload picture success!`,
          });
        });
      }
    });
  } else {
    return res.status(401).json({
      success: false,
      message: `Upload picture failed!`,
    });
  }
};
