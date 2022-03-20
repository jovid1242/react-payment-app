import React from "react";
import "../../styles/card.scss";
import bgImgae from "../../assets/img/7.jpeg";
import chipImgae from "../../assets/img/chip.png";
import visaImgae from "../../assets/img/visa.png";

export default function Card({ visible, info, cardNumber }) {
  return (
    <div className="card-section">
      <div className="wrapper">
        <div className={visible === true ? "card-inner active" : "card-inner"}>
          <div className="card-item__side front_card">
            <img src={bgImgae} className="card-item__side__bg" alt="bg-color" />
            <div className="card-top">
              <div className="image">
                <img src={chipImgae} alt="chipImgae" />
                <img src={visaImgae} alt="visaImgae" />
              </div>
              <div className="card-number-box">
                {cardNumber?.map((el, i) => {
                  return <span key={el + i}>{el}</span>;
                })}
              </div>
              <div className="card-top-info">
                <div className="box">
                  <p>Держатель карты </p>
                  <div className="card-holder-name">{info.cardName}</div>
                </div>
                <div className="box">
                  <span>Дата</span>
                  <div className="expiration">
                    <span className="exp-month">{info.cardMonth}</span>
                    <span>/</span>
                    <span className="exp-year">{info.cardYear}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-item__side back_card">
            <img src={bgImgae} className="card-item__side__bg" alt="bg-color" />
            <div className="back_card__info">
              <div className="stripe"></div>
              <div className="__wrapper">
                <div className="box">
                  <span>cvv</span>
                  <div className="cvv-box">{info.cardCvv}</div>
                  <img src={visaImgae} alt="chipImgae" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
