import "../style.css";
import { useState } from "react";

function GetUserComponent({ setUser, setIsLoggedIn }) {
  const [userInput, setUserInput] = useState("");
  function HandleLogin(userInput) {
    setUser(userInput);
    setIsLoggedIn(true);
  }

  return (
    <form>
      <h1>Olá, Por favor nos diga seu Nome</h1>
      <input
        id="input"
        placeholder="Seu nome"
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      ></input>
      <button className="botao" onClick={() => HandleLogin(userInput)}>
        Acessar com o nome
      </button>
    </form>
  );
}

export default GetUserComponent;
