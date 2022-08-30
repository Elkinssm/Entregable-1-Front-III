import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";

function App() {
  const [totalItems,setTotalItems] = useState(0);

  return (
    <div className="App">
      <Cabecera totalItems={totalItems}  />
      <Listado 
      totalItems={totalItems} 
      setTotalItems={setTotalItems} />
    </div>
  );
}

export default App;