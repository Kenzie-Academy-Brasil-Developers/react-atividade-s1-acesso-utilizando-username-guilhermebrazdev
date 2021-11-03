import "../style.css";

function WelcomePage({ user, setIsLoggedIn }) {
  function HandleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <h1>Seja Bem vindo, {user} =D !</h1>
      <button className="botao" id="exit" onClick={HandleLogout}>
        {" "}
        Sair
      </button>
    </div>
  );
}

export default WelcomePage;
