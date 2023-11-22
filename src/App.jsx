import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import "./assets/star-wars-logo.svg";

function App() {
  return (
    <>
      <div className="logo-container">
        <img className="logo" src="src/assets/star-wars-logo.svg"></img>
      </div>
      <div>
        <AppRouter />
      </div>
    </>
  );
}

export default App;
