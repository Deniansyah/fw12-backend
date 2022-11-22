exports.readAllUser = (req, res) => {
  return res.status(200).json({
    status : true,
    message : 'Lists data of users'
  })
}

exports.createUser = (req, res) => {
  return res.status(200).json({
    status : true,
    message : 'User created successfully'
  })
}

exports.updateUser = (req, res) => {
  return res.status(200).json({
    status : true,
    message : 'User Update successfully'
  })
}

exports.deleteUser = (req, res) => {
  return res.status(200).json({
    status : true,
    message : 'User Delete successfully'
  })
}

exports.readUser = (req, res) => {
  return res.status(200).json({
    status: true,
    message: "Detail User",
  });
};
