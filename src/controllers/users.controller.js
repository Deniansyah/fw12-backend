const errorHandler = require('../helpers/errorHandler')
const { selectAllUser, insertUser, selectUser, dropUser, changeUser } = require("../models/users.model")

exports.readAllUser = (req, res) => {
  selectAllUser((err, data) => {
    if (err) {
      return errorHandler(err, res)
    }
    return res.status(200).json({
      success: true,
      message: 'Users Data List',
      results: data.rows
    })
  })

  // return res.status(200).json({
  //   status : true,
  //   message : 'Lists data of users'
  // })
}

exports.createUser = (req, res) => {
  insertUser(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }else {
      return res.status(200).json({
        status: true,
        message: "User created success",
        results: data.rows[0]
    })
    }
  })

  // return res.status(200).json({
  //   status : true,
  //   message : 'User created successfully'
  // })
}

exports.updateUser = (req, res) => {
  changeUser(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    } else {
      return res.status(200).json({
        status: true,
        message: "Updated detail user",
        results: data.rows[0],
      });
    }
  });

  // return res.status(200).json({
  //   status : true,
  //   message : 'User Update successfully'
  // })
}

exports.deleteUser = (req, res) => {
  dropUser(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }else {
      res.status(200).json({
        status: true,
        message: 'Delete data user id = ' + req.params.id + ' success',
      })
    }
  })

  // return res.status(200).json({
  //   status : true,
  //   message : 'User Delete successfully'
  // })
}

exports.readUser = (req, res) => {
  selectUser(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }else {
      res.status(200).json({
        status: true,
        message: 'Detail User',
        results: data.rows[0]
      })
    }
  })

  // return res.status(200).json({
  //   status: true,
  //   message: "Detail User",
  // });
};
