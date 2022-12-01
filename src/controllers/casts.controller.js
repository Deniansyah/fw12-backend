const errorHandler = require("../helpers/errorHandler");
const { selectAllCast, selectCountAllCast, insertCast, updateCast, deleteCast, selectCast } = require("../models/casts.model");

exports.readAllCast = (req, res) => {
  req.query.page = parseInt(req.query.page) || 1
  req.query.limit = parseInt(req.query.limit) || 5
  req.query.search = req.query.search || ''
  const sortable = ['name', 'createdAt', 'updatedAt']
  req.query.sortBy = (sortable.includes(req.query.sortBy) && req.query.sortBy) || 'createdAt'
  req.query.sort = req.query.sort || 'ASC'

  const filter = {
    limit: req.query.limit,
    page: (parseInt(req.query.page) - 1) * req.query.limit,
    search: req.query.search,
    sortBy: req.query.sortBy,
    sort: req.query.sort
  }

  const pageInfo = {
    page: req.query.page
  }

  selectCountAllCast(filter, (err, data) => {
    if (err) {
      return errorHandler()
    }
    pageInfo.totalData = parseInt(data.rows[0].totalData)
    pageInfo.totalPage = Math.ceil(pageInfo.totalData / req.query.limit)
    pageInfo.nextPage = req.query.page < pageInfo.totalPage ? req.query.page + 1 : null
    pageInfo.prevPage = req.query.page > 1 ? req.query.page - 1 : null

    selectAllCast(filter, (err, data) => {
      if (err) {
        console.log(err);
        return errorHandler();
      }
      return res.status(200).json({
        success: true,
        message: "Cast data list",
        pageInfo,
        results: data.rows,
      });
    });
  })


  // return res.status(200).json({
  //   status: true,
  //   message: "Lists data of cast",
  // });
};

exports.createCast = (req, res) => {
  insertCast(req.body, (err, data) => {
    if (err) {
      console.log(err)
      return errorHandler()
    }
    return res.status(200).json({
      success: true,
      message: 'Cast add successfully',
      results: data.rows[0]
    })
  })

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Create data success",
  // });
};

exports.updateCast = (req, res) => {
  updateCast(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler()
    }
    return res.status(200).json({
      success: true,
      message: 'Update data cast',
      results: data.rows[0]
    })
  })

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Updated data is succes",
  // });
};

exports.deleteCast = (req, res) => {
  deleteCast(req.params.id, (err, data) => {
    if (err) {
      return errorHandler()
    }
    return res.status(200).json({
      success: true,
      message: 'Deleted cast id = ' + req.params.id + ' success',
    })
  })

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Deleted data cast",
  // });
};

exports.readCast = (req, res) => {
  selectCast(req.params.id, (err, data) => {
    if (err) {
      return errorHandler()
    }
    return res.status(200).json({
      success: true,
      message: 'Detail cast',
      results: data.rows[0]
    })
  })

  // return res.status(200).json({
  //   status: true,
  //   meassage: "Show detail cast",
  // });
};
