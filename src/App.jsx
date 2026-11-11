import { useState } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador((valorAtual) => valorAtual + 1);
  }

  function decrementar() {
    setContador((valorAtual) => valorAtual - 1);
  }

  function resetar() {
    setContador(0);
  }

  return (
    <div className="pagina">
      <h1>Contador</h1>

      <div className="contador">
        <h2>{contador}</h2>

        <div className="botoes">
          <button onClick={decrementar}>-</button>

          <button onClick={resetar}>Resetar</button>

          <button onClick={incrementar}>+</button>
        </div>
      </div>

      <p>Utilizando React e useState</p>
    </div>
  );
}

export default App;