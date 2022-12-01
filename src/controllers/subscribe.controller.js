const errorHandler = require("../helpers/errorHandler");
const { selectAllSubscribe, insertSubscribe, changeSubscribe, dropSubscribe, selectSubscribe } = require("../models/subscribe.model");

exports.readAllSubscribe = (req, res) => {
  selectAllSubscribe((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Subscribe Data List",
      results: data.rows,
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of subscribe",
  // });
};

exports.createSubscribe = (req, res) => {
  insertSubscribe(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Subscribe created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateSubscribe = (req, res) => {
  changeSubscribe(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail subbscribe",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteSubscribe = (req, res) => {
  dropSubscribe(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data subscribe id = " + req.params.id + " success",
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data subscribe",
  // });
};

exports.readSubscribe = (req, res) => {
  selectSubscribe(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail Subscribe",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail subscribe",
  // });
};
