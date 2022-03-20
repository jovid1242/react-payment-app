import React, { useEffect, useState } from "react";
import "../../styles/payment.scss";
import Card from "../card/Card";
import CardForm from "../card/CardForm";

export default function Payment() {
  const [activeTab, setActiveTab] = useState(false);
  const [cardNumberSlice, setCardNumberSlice] = useState([]);

  const [cardAction, setCardAction] = useState({
    cardName: "Jovid Masharipov",
    cardNumber: "0000000000000000",
    cardAmount: 0,
    cardMonth: "00",
    cardYear: "0000",
    cardCvv: "",
  });

  function sliceICardNumber(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  const showCard = (arg) => {
    setActiveTab(arg);
  };

  useEffect(() => {
    setCardNumberSlice(sliceICardNumber(cardAction.cardNumber, 4));
  }, [cardAction.cardNumber]);

  return (
    <div className="payment">
      <div className="container">
        <div className="payment__wrapper">
          <Card
            visible={activeTab}
            info={cardAction}
            cardNumber={cardNumberSlice}
          />
          <CardForm
            showCard={showCard}
            info={cardAction}
            handleCard={setCardAction}
          />
        </div>
      </div>
    </div>
  );
}
