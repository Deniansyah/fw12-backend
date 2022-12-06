const errorHandler = require("../helpers/errorHandler");
const { selectAllMovie, insertMovie, selectMovie, dropMovie, changeMovie, selectCountAllMovie } = require("../models/movie.model")


exports.readAllMovie = (req, res) => {
  req.query.page = parseInt(req.query.page) || 1;
  req.query.limit = parseInt(req.query.limit) || 5;
  req.query.search = req.query.search || "";
  const sortable = ["title", "createdAt", "updatedAt"];
  req.query.sortBy =
    (sortable.includes(req.query.sortBy) && req.query.sortBy) || "createdAt";
  req.query.sort = req.query.sort || "ASC";

  const filter = {
    limit: req.query.limit,
    page: (parseInt(req.query.page) - 1) * req.query.limit,
    search: req.query.search,
    sortBy: req.query.sortBy,
    sort: req.query.sort,
  };

  const pageInfo = {
    page: req.query.page,
  };

  selectCountAllMovie(filter, (err, data) => {
    if (err) {
      console.log(err)
      return errorHandler();
    }
    pageInfo.totalData = parseInt(data.rows[0].totalData);
    pageInfo.totalPage = Math.ceil(pageInfo.totalData / req.query.limit);
    pageInfo.nextPage =
      req.query.page < pageInfo.totalPage ? req.query.page + 1 : null;
    pageInfo.prevPage = req.query.page > 1 ? req.query.page - 1 : null;

    selectAllMovie(filter, (err, data) => {
      if (err) {
        console.log(err);
        return errorHandler();
      }
      return res.status(200).json({
        success: true,
        message: "Movie data list",
        pageInfo,
        results: data.rows,
      });
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

