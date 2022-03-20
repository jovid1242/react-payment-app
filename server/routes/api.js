const Router = require("express").Router;
const router = new Router();
const { body } = require("express-validator");
// const path = require("path");
const paymentController = require("../controller/paymentController");
// const Middleware = require("../middlewares/authMiddleware");

router.post(
  "/pay",
  body("cardName").isString(),
  body("cardNumber").isLength({ min: 3, max: 32 }),
  body("cardAmount").isLength({ min: 10 }),
  body("cardMonth").isLength({ min: 1, max: 12 }),
  body("cardYear").isLength({ min: 9999 }),
  body("cardCvv").isLength({ min: 3, max: 3 }),
  paymentController.createPay
);

router.get("/paym", paymentController.getPay);

module.exports = router;
