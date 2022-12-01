const errorHandler = require("../helpers/errorHandler");
const { selectAllMovie, insertMovie, selectMovie, dropMovie, changeMovie } = require("../models/movie.model")


exports.readAllMovie = (req, res) => {
  selectAllMovie((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Movie Data List",
      results: data.rows,
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of movie",
  // });
};

exports.createMovie = (req, res) => {
  insertMovie(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Movie created success",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateMovie = (req, res) => {
  changeMovie(req.params.id, req.body, (err, data) => {
    if (err) {
      console.log(err)
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail movie",
        results: data.rows[0],
      });
    }
  });


  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteMovie = (req, res) => {
  dropMovie(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Delete data movie id = " + req.params.id + " success",
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data movie",
  // });
};

exports.readMovie = (req, res) => {
  selectMovie(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      res.status(200).json({
        status: true,
        message: "Detail Movie",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail movie",
  // });
};

