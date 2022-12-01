const errorHandler = require("../helpers/errorHandler");
const { selectAllMovieGenre, insertMovieGenre, selectMovieGenre, dropMovieGenre, changeMovieGenre } = require("../models/movieGenre.model")


exports.readAllMovieGenre = (req, res) => {
  selectAllMovieGenre((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "MovieGenre Data List",
      results: data.rows,
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of movieGenre",
  // });
};

exports.createMovieGenre = (req, res) => {
  insertMovieGenre(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "MovieGenre created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateMovieGenre = (req, res) => {
  changeMovieGenre(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail movieGenre",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteMovieGenre = (req, res) => {
  dropMovieGenre(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data movieGenre id = " + req.params.id + " success",
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data movieGenre",
  // });
};

exports.readMovieGenre = (req, res) => {
  selectMovieGenre(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail MovieGenre",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail movieGenre",
  // });
};
