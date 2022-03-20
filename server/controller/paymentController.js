const CardModel = require("../models/cardModel.js");

class paymentController {
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
