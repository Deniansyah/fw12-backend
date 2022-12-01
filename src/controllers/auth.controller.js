const { selectUserByEmail, insertUser, changeUser } = require("../models/users.model")
const { insertForgot, selectForgotByEmailAndCode, dropForgot } = require("../models/forgot.model")
const errorHandler = require("../helpers/errorHandler")
const jwt = require("jsonwebtoken")

exports.login = (req, res) => {
  selectUserByEmail(req.body.email, (err, {rows}) => {
    if (rows.length) {
      const [users] = rows
      if (req.body.password === users.password) {
        const token = jwt.sign({id: users.id}, 'backend-secret')
        return res.status(200).json({
          success: true,
          message: "Login success",
          results: {
            token
          }
        });
      }
    }
    return res.status(401).json({
      success: false,
      message: 'Wrong email or password'
    })
  })
}

exports.register = (req, res) => {
  insertUser(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res)
    }
    // const {rows: users} = data
    // const [user] = users
    // const token = jwt.sign({id: user.id}, "backend-secret")

    return res.status(200).json({
      success: true,
      message: 'Register success, please relogin',
      // results: { token }
    })
  })
}

exports.forgotPassword = (req, res) => {
  const {email} = req.body
  selectUserByEmail(email, (err, {rows: users}) => {
    if (err) {
      return errorHandler(err, res)
    }
    if (users.length) {
      const [user] = users
      const data = {
        email,
        userId : user.id,
        code : Math.ceil(Math.random() * 90000)
      }
      insertForgot(data, (err, {rows: results}) => {
        if (results.length) {
          return res.status(200).json({
            success: true,
            message: 'Reset password has been requested'
          })
        }
      })
    }else {
      return res.status(400).json({
        success: false,
        message: 'User not found'
      })
    }
  })
}

exports.resetPassword = (req, res) => {
  const {password, confirmPassword} = req.body
  if (password === confirmPassword) {
    selectForgotByEmailAndCode(req.body, (err, { rows: users }) => {
      if (err) {
        return errorHandler(err, res)
      }
      if (users.length) {
        const [resetRequest] = users
        changeUser (resetRequest.userId, { password }, (err, { rows: users }) => {
          if (err) {
            return errorHandler(err, res)
          }
          if (users.length) {
            dropForgot(resetRequest.id, (err, {rows}) => {
              if (err) {
                return errorHandler(err, res)
              }
              if (!rows.length) {
                return res.status(200).json({
                  success: true,
                  message: "Password Updated, please relogin",
                });
              }
            })
          }
        })
      }else {
        return res.status(400).json({
          success: false,
          message: "Reset request not found",
        });
      }
    })
  }else {
    return res.status(400).json({
      success: false,
      message: 'password and confirm password not match'
    })
  }
}
