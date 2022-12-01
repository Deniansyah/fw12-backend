const errorHandler = require("../helpers/errorHandler");
const { selectAllMovieScheduleTime, insertMovieScheduleTime, changeMovieScheduleTime, dropMovieScheduleTime, selectMovieScheduleTime } = require("../models/movieScheduleTime.model");

exports.readAllMovieScheduleTime = (req, res) => {
  selectAllMovieScheduleTime((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "MovieScheduleTime Data List",
      results: data.rows,
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of movieScheduleTime",
  // });
};

exports.createMovieScheduleTime = (req, res) => {
  insertMovieScheduleTime(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "MovieScheduleTime created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateMovieScheduleTime = (req, res) => {
  changeMovieScheduleTime(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail movieScheduleTime",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteMovieScheduleTime = (req, res) => {
  dropMovieScheduleTime(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data movieScheduleTime id = " + req.params.id + " success",
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data movieScheduleTime",
  // });
};

exports.readMovieScheduleTime = (req, res) => {
  selectMovieScheduleTime(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail MovieScheduleTime",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail movieScheduleTime",
  // });
};
