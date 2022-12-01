const paymentMethodRouter = require("express").Router();
const {
  readAllPaymentMethod,
  createPaymentMethod,
  updatePaymentMethod,
  deletePaymentMethod,
  readPaymentMethod,
} = require("../controllers/paymentMethod.controller");

paymentMethodRouter.get("/", readAllPaymentMethod);
paymentMethodRouter.post("/", createPaymentMethod);
paymentMethodRouter.patch("/:id", updatePaymentMethod);
paymentMethodRouter.delete("/:id", deletePaymentMethod);
paymentMethodRouter.get("/:id", readPaymentMethod);

module.exports = paymentMethodRouter;
