import logo from './logo.svg';
import './App.css';
import Heading from "./components/heading/Heading"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          {process.env.REACT_APP_ENV_NAME}
          <Heading/>
      </header>
    </div>
  );
}

export default App;
