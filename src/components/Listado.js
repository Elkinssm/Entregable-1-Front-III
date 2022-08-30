import React from "react";
import data from "./data.json";
import Item from "./Item";

export default function Listado({ totalItems, setTotalItems }) {

  return (
    <div className="container">
      <Item data={data}
        totalItems={totalItems}
        setTotalItems={setTotalItems}
      />
    </div>
  );
}
