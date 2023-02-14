const { selectUser, changeUser } = require("../models/users.model");

exports.readProfile = (req, res) => {
  selectUser(req.userData.id, (err, data) => {
    if (data.rows.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Profile by token not found",
      });
    }

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
