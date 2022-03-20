class paymentController {
  async getPay(req, res, next) {
    try {
      return res.json({ name: "jovid" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new paymentController();
