import React from "react";
import iconoCarrito from "../assets/img/carrito.png";
import iconoVolver from "../assets/img/volver.png";

export default function Header() {
  return (
    <>
      <a href="../assets/statics/carrito.html">
        <img src={iconoCarrito} alt="" className="carritou" />
      </a>
      <a href="$">
        <img src={iconoVolver} alt="" className="volver" />
      </a>

      <h1 className="titulo">
        Dev <br />
        RockStore
      </h1>
    </>
  );
}
