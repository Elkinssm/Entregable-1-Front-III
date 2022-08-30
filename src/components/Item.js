import { useEffect, useState } from "react";
import "../index.css";

export default function Item({ data, totalItems, setTotalItems }) {
  
  const [stock, setStock] = useState([]);

  const buyProduct = (product) => {
    setStock(
      stock.map((item) => {
        if (item.id === product.id) {
          item.stock = item.stock - 1;
          setTotalItems(totalItems + 1);
        }
        return item;
      })
    );
  };

  useEffect(() => {
    setStock(data);
  }, []);

  return (
    <>
      {stock.map((product) => (
        <div className="producto" key={product.id}>
          <h3>{product.producto.nombre}</h3>
          <p>{product.producto.descripcion}</p>
          <h5>
            En stock: {product.stock > 0 ? product.stock : <span>agotado</span>}
          </h5>
          <button
            onClick={() => buyProduct(product)}
            disabled={product.stock < 1}
          >
            {" "}
            {product.stock > 0 ? "COMPRAR" : "SIN STOCK"}
          </button>
        </div>
      ))}
    </>
  );
}
