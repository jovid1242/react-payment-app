import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import http from "../../http";
import "../../styles/card.scss";

const schema = yup
  .object({
    cardNumber: yup
      .number()
      .integer()
      .typeError("Номер карты должен быть числом")
      .min(16, "длина значения должно быть 16")
      .required(),
    cardAmount: yup.number().integer().required(),
    cardCvv: yup
      .number()
      .integer()
      .typeError("Номер Cvv должен быть числом")
      .min(3, "длина значения должно быть 3")
      .required(),
  })
  .required();

export default function CardForm({ showCard, handleCard }) {
  const [disableBtn, setDisableBtn] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    http
      .post("/pay", {
        cardName: "Jovid Masharipov",
        cardNumber: data.cardNumber,
        cardAmount: data.cardAmount,
        cardMonth: data.cardMonth,
        cardYear: data.cardYear,
        cardCvv: data.cardCvv,
      })
      .then((res) => {
        alert(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInput = (e) => {
    if (e.target.name === "cardCvv") {
      showCard(true);
    }
    handleCard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div className="card-form" onClick={() => showCard(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-input">
            <label htmlFor="cardNumber" className="card-input__label">
              Номер карты
              <p>{errors.cardNumber?.message}</p>
            </label>
            <input
              type="tel"
              id="cardNumber"
              name="cardNumber"
              autoComplete="cc-number"
              maxLength="16"
              minLength="16"
              className="card-input__input"
              placeholder="0000-0000-0000-0000"
              {...register("cardNumber", {
                required: true,
                maxLength: 16,
                minLength: 16,
              })}
              onChange={handleInput}
            />
          </div>
          <div className="card-input">
            <label htmlFor="cardAmount" className="card-input__label">
              Сума(руб)
            </label>
            <input
              type="number"
              id="cardAmount"
              {...register("cardAmount", {
                required: true,
              })}
              onChange={handleInput}
              className="card-input__input"
            />
          </div>
          <div className="card-form__row">
            <div className="card-form__group">
              <label htmlFor="cardMonth" className="card-input__label">
                Срок годности
              </label>
              <select
                id="cardMonth"
                name="cardMonth"
                className="card-input__input _select"
                {...register("cardMonth", {
                  required: true,
                })}
                onChange={handleInput}
              >
                <option defaultValue="" disabled selected>
                  Месяц
                </option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, i) => {
                  return (
                    <option key={el + i} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              <select
                id="cardYear"
                name="cardYear"
                className="card-input__input _select"
                {...register("cardYear", {
                  required: true,
                })}
                onChange={handleInput}
              >
                <option defaultValue="" disabled selected>
                  Год
                </option>
                {[2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029].map(
                  (el, i) => {
                    return (
                      <option key={el + i} value={el}>
                        {el}
                      </option>
                    );
                  }
                )}
              </select>
            </div>
            <div className="card-form__col -cvv">
              <div className="card-input">
                <label htmlFor="cardCvv" className="card-input__label">
                  CVV <p>{errors.cardCvv?.message}</p>
                </label>
                <input
                  type="text"
                  id="cardCvv"
                  className="card-input__input"
                  maxLength="3"
                  name="cardCvv"
                  autoComplete="off"
                  {...register("cardCvv", {
                    required: true,
                    maxLength: 3,
                    minLength: 3,
                  })}
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>

          <button
            className={
              disableBtn === true
                ? "card-form__button disable_btn"
                : "card-form__button"
            }
            disabled={disableBtn}
          >
            Отправить
          </button>
        </form>
      </div>
    </>
  );
}
