const Router = require("express").Router;
const router = new Router();
const { body } = require("express-validator");
const paymentController = require("../controller/paymentController");

router.post(
  "/pay",
  body("cardName").isString(),
  body("cardNumber").isLength({ min: 16, max: 16 }),
  body("cardAmount").isLength({ min: 10 }),
  body("cardMonth").isFloat({ min: 1, max: 12 }),
  body("cardYear").isFloat({ min: 2022 }),
  body("cardCvv").isLength({ min: 3, max: 3 }),
  paymentController.createPay
);

module.exports = router;
