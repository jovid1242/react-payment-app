const CardModel = require("../models/cardModel.js");

class paymentController {
  async getPay(req, res, next) {
    try {
      return res.json({ name: "jovid" });
    } catch (e) {
      next(e);
    }
  }

  async createPay(req, res, next) {
    try {
      const { cardName, cardNumber, cardAmount, cardMonth, cardYear, cardCvv } =
        req.body;
      const card = await CardModel.create({
        cardName,
        cardNumber,
        cardAmount,
        cardMonth,
        cardYear,
        cardCvv,
      });
      return res.json({ data: { RequestId: card._id, Amount: 100 } });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new paymentController();
