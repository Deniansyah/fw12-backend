const usersRouter = require('express').Router()

const { readAllUser, createUser, updateUser, deleteUser, readUser } = require("../controllers/users.controller");

usersRouter.get('/', readAllUser)
usersRouter.post('/', createUser)
usersRouter.patch('/:id', updateUser)
usersRouter.delete('/:id', deleteUser)
usersRouter.get('/:id', readUser)

module.exports = usersRouter
