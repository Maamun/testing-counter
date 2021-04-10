import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>My Counter</h1>
        <p>37</p>
        <div className="btn-wrapper">
          <button className="btn">
            -
          </button>
          <input
            className="input"
            type="text"
            value="6"
            placeholder="increment/decrement by"
          />
          <button className="btn">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
