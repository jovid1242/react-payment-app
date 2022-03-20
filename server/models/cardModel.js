const { Schema, model } = require("mongoose");

const CardModel = new Schema({
  cardName: {
    type: String,
    unique: false,
    required: true,
  },
  cardNumber: {
    type: Number,
    required: true,
  },
  cardAmount: {
    type: Number,
    default: false,
  },
  cardMonth: {
    type: String,
    default: false,
  },
  cardYear: {
    type: String,
    default: false,
  },
  cardCvv: {
    type: Number,
    default: false,
  },
});

module.exports = model("CardModel", CardModel);
