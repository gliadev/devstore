import React from "react";
import imgCerebro from "../assets/img/cerebro.png";

export default function Carrito() {
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito"></div>

        <div className="carrito-precio">
          Total a pagar <br />
          <strong>U$D 3400</strong>
        </div>
      </div>
    </>
  );
}
