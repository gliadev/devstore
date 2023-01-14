import React, { useContext } from "react";
import imgCerebro from "../assets/img/cerebro.png";
import Contexto from "../context/Contexto";
import "../assets/css/Item.css";

export default function Item() {
  const { agregarAlCarrito } = useContext(Contexto);
  return (
    <>
      <div className="home-item">
        <img src={imgCerebro} alt="" className="home-item-img" />
        <div className="home-item-info">
          <h1 className="home-item-titulo">Cerebro loco</h1>
          <p className="home-item-medidas">Medidas: 20x10</p>
          <div className="home-item-actions">
            <h3 className="home-item-precio">AR$ 150</h3>
            <button
              className="home-item-comprar"
              onClick={() => {
                agregarAlCarrito();
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
