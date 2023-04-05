import "./App.css";
import NavBar from "../componentes/NavBar/NavBar";
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer";
import ItemList from "../componentes/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { miContexto } from "../../context";

function App() {
  const parametro = useParams();
  const isCategoria = Boolean(parametro.id);

  const datosContexto = useContext(miContexto)

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer isCategoria={isCategoria} categoria={parametro.id} />
    </div>
  );
}

export default App;
