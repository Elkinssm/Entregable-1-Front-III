import React from 'react'
import '../index.css'

export default function Cabecera({ totalItems }) {

  return (
    <header>
      <h1>Carrito de compras</h1>
      <p>Cantidad de productos &nbsp;
        <span>{totalItems}</span>
      </p>

    </header>
  )
}
