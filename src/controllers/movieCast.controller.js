const errorHandler = require("../helpers/errorHandler");
const { selectAllMovieCast, insertMovieCast, selectMovieCast, dropMovieCast, changeMovieCast } = require("../models/movieCast.model")


exports.readAllMovieCast = (req, res) => {
  selectAllMovieCast((err, data) => {
    if (err) {
      console.log(err)
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "MovieCast Data List",
      results: data.rows,
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of movieCast",
  // });
};

exports.createMovieCast = (req, res) => {
  insertMovieCast(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "MovieCast created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateMovieCast = (req, res) => {
  changeMovieCast(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail movieCast",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteMovieCast = (req, res) => {
  dropMovieCast(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data movieCast id = " + req.params.id + " success",
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data movieCast",
  // });
};

exports.readMovieCast = (req, res) => {
  selectMovieCast(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail MovieCast",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail movieCast",
  // });
};
