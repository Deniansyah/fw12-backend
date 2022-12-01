const errorHandler = require("../helpers/errorHandler");
const { selectAllForgot, insertForgot, selectForgot, dropForgot, changeForgot } = require("../models/forgot.model")


exports.readAllForgot = (req, res) => {
  selectAllForgot((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Forgot Data List",
      results: data.rows
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of forgot",
  // });
};

exports.createForgot = (req, res) => {
  insertForgot(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Forgot created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateForgot = (req, res) => {
  changeForgot(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail forgot",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteForgot = (req, res) => {
  dropForgot(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data forgot id = " + req.params.id + " success",
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data forgot",
  // });
};

exports.readForgot = (req, res) => {
  selectForgot(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail Forgot",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail forgot",
  // });
};
