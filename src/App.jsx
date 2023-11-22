import './App.css'
import AppRouter from './components/AppRouter/AppRouter'

function App() {

  return (
    <>
      <div className="logo-container">
        <img className="logo" src="src\assets\Star_Wars_Yellow_Logo.svg"></img>
      </div>
      <div>
        <AppRouter />
      </div>
    </>
  )
}

export default App;
