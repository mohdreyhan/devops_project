import logo from './logo.svg';
import './App.css';

function App() {
  //changes to verify build in jenkins again x 10

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React in class
        </a>
      </header>
    </div>
  );
}

export default App;
