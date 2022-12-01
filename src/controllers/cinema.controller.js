const errorHandler = require("../helpers/errorHandler");
const { selectAllCinema, insertCinema, changeCinema, dropCinema, selectCinema } = require("../models/cinema.model");

exports.readAllCinema = (req, res) => {
  selectAllCinema((err, data) => {
    if (err) {
      return errorHandler()
    }
    return res.status(200).json({
      status: true,
      message: 'Cinema data lists',
      results: data.rows
    })
  })

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of cinema",
  // });
};

exports.createCinema = (req, res) => {
  insertCinema(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Cinema created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateCinema = (req, res) => {
  changeCinema(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      status: true,
      message: "Updated detail cinema",
      results: data.rows[0],
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteCinema = (req, res) => {
  dropCinema(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data cinema id = " + req.params.id + " success",
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data cinema",
  // });
};

exports.readCinema = (req, res) => {
  selectCinema(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail Cinema",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail cinema",
  // });
};
