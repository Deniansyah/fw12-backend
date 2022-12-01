const errorHandler = require("../helpers/errorHandler");
const { selectAllGenre, insertGenre, updateGenre, deleteGenre, selectGenre } = require("../models/genre.model");

exports.readAllGenre = (req, res) => {
  selectAllGenre((err, data) => {
    if (err) {
      return errorHandler();
    }
    return res.status(200).json({
      success: true,
      message: "Genre data list",
      results: data.rows,
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of genre",
  // });
};

exports.createGenre = (req, res) => {
  insertGenre(req.body, (err, data) => {
    if (err) {
      console.log(err);
      return errorHandler();
    }
    return res.status(200).json({
      success: true,
      message: "Genre add successfully",
      results: data.rows[0],
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateGenre = (req, res) => {
  updateGenre(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler();
    }
    return res.status(200).json({
      success: true,
      message: "Update data genre",
      results: data.rows[0],
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteGenre = (req, res) => {
  deleteGenre(req.params.id, (err, data) => {
    if (err) {
      return errorHandler();
    }
    return res.status(200).json({
      success: true,
      message: "Deleted genre id = " + req.params.id + " success",
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data genre",
  // });
};

exports.readGenre = (req, res) => {
  selectGenre(req.params.id, (err, data) => {
    if (err) {
      return errorHandler();
    }
    return res.status(200).json({
      success: true,
      message: "Detail genre",
      results: data.rows[0],
    });
  });

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail genre",
  // });
};
