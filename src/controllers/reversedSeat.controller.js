const errorHandler = require("../helpers/errorHandler");
const { selectAllReversedSeat, insertReversedSeat, changeReversedSeat, dropReversedSeat, selectReversedSeat } = require("../models/reversedSeat.model");

exports.readAllReversedSeat = (req, res) => {
  selectAllReversedSeat((err, data) => {
    if (err) {
      console.log(err.message)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Lists data of reversedSeat",
      results: data.rows,
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of reversedSeat",
  // });
};

exports.createReversedSeat = (req, res) => {
  insertReversedSeat(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "ReversedSeat created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateReversedSeat = (req, res) => {
  changeReversedSeat(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail reversedSeat",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteReversedSeat = (req, res) => {
  dropReversedSeat(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data reversedSeat id = " + req.params.id + " success",
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data reversedSeat",
  // });
};

exports.readReversedSeat = (req, res) => {
  selectReversedSeat(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail ReversedSeat",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail reversedSeat",
  // });
};
