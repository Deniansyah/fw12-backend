const errorHandler = require("../helpers/errorHandler");
const { selectAllStatus, insertStatus, changeStatus, dropStatus, selectStatus } = require("../models/status.model");

exports.readAllStatus = (req, res) => {
  selectAllStatus((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Status Data List",
      results: data.rows,
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of status",
  // });
};

exports.createStatus = (req, res) => {
  insertStatus(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Status created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateStatus = (req, res) => {
  changeStatus(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail status",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteStatus = (req, res) => {
  dropStatus(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data status id = " + req.params.id + " success",
      });
    }
  });


  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data status",
  // });
};

exports.readStatus = (req, res) => {
  selectStatus(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail Status",
        results: data.rows[0],
      });
    }
  });


  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail status",
  // });
};
