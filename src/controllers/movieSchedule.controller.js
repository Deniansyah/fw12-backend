const errorHandler = require("../helpers/errorHandler");
const { selectMovieSchedule, dropMovieSchedule, changeMovieSchedule, insertMovieSchedule, selectAllMovieSchedule } = require("../models/movieSchedule.model");

exports.readAllMovieSchedule = (req, res) => {
  selectAllMovieSchedule((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "MovieSchedule Data List",
      results: data.rows,
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of movieSchedule",
  // });
};

exports.createMovieSchedule = (req, res) => {
  insertMovieSchedule(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "MovieSchedule created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateMovieSchedule = (req, res) => {
  changeMovieSchedule(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail movieSchedule",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteMovieSchedule = (req, res) => {
  dropMovieSchedule(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data movieSchedule id = " + req.params.id + " success",
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data movieSchedule",
  // });
};

exports.readMovieSchedule = (req, res) => {
  selectMovieSchedule(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail MovieSchedule",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail movieSchedule",
  // });
};
