const transactionRouter = require("express").Router();
const {
  readAllTransaction,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  readTransaction,
} = require("../controllers/transaction.controller");

transactionRouter.get("/", readAllTransaction);
transactionRouter.post("/", createTransaction);
transactionRouter.patch("/:id", updateTransaction);
transactionRouter.delete("/:id", deleteTransaction);
transactionRouter.get("/:id", readTransaction);

module.exports = transactionRouter;
