const errorHandler = require("../helpers/errorHandler");
const { selectPaymentMethod, dropPaymentMethod, changePaymentMethod, insertPaymentMethod, selectAllPaymentMethod } = require("../models/paymentMethod.model");

exports.readAllPaymentMethod = (req, res) => {
  selectAllPaymentMethod((err, data) => {
    if (err) {
      console.log(err.message)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "PaymentMethod Data List",
      results: data.rows,
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of paymentMethod",
  // });
};

exports.createPaymentMethod = (req, res) => {
  insertPaymentMethod(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "PaymentMethod created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updatePaymentMethod = (req, res) => {
  changePaymentMethod(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail paymentMethod",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deletePaymentMethod = (req, res) => {
  dropPaymentMethod(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data paymentMethod id = " + req.params.id + " success",
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data paymentMethod",
  // });
};

exports.readPaymentMethod = (req, res) => {
  selectPaymentMethod(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail PaymentMethod",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail paymentMethod",
  // });
};
