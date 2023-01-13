import React from "react";
import imgCerebro from "../assets/img/cerebro.png";
import "../assets/css/Carrito.css";

export default function ItemCarrito() {
  return (
    <>
      <div className="carrito-item">
        <img src={(imgCerebro = "")} alt="" className="carrito-item-img" />
        <div className="carrito-txt">
          <h1 className="carrito-item-titulo">Cerebro loco</h1>
          <h3 className="carrito-item-precio">AR$ 150</h3>
        </div>
        <img src="borrar.png" alt="" className="carrito-item-borrar" />
      </div>
    </>
  );
}
