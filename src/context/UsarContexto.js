import axios from "axios";
import Contexto from "./Contexto";
import { useState } from "react";

export default function UsarContexto(props) {
  const { children } = props;
  const [estado, setEstado] = useState([]);
  const estadoInicial = {
    productos: [],
    carrito: [],
  };
  const listadoProductos = async () => {
    const res = await axios.get(
      "https://devrockstore-default-rtdb.firebaseio.com/productos.json"
    );
    setEstado(res.data);
  };
  const agregarAlCarrito = () => {};
  const eliminarDelCarrito = () => {};
  return (
    <Contexto.Provider
      value={{
        productos: estado,
        //carrito: estadoInicial.carrito,
        listadoProductos,
        agregarAlCarrito,
        eliminarDelCarrito,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
