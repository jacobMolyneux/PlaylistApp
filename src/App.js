import "./App.css";

function App() {
  const loginClicked = () => {
    console.log("you are logged in");
  };
  return (
    <div className="App">
      <div id="loginContainer">
        <form id="login">
          <p className="formLabel">Username:</p>
          <input id="username"></input>
          <p className="formLabel">Password:</p>
          <input id="password"></input>
        </form>
        <button id="loginButton" onClick={loginClicked}>
          Login to Spotify
        </button>
      </div>
    </div>
  );
}

export default App;
