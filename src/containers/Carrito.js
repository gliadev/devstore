import React from "react";
//import imgCerebro from "../assets/img/cerebro.png";
import "../assets/css/Carrito.css";
import ItemCarrito from "../components/ItemCarrito";

export default function Carrito() {
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito">
          <ItemCarrito />
          <ItemCarrito />
          <ItemCarrito />
          <ItemCarrito />
        </div>

        <div className="carrito-precio">
          Total a pagar <br />
          <strong>U$D 3400</strong>
        </div>
      </div>
    </>
  );
}
