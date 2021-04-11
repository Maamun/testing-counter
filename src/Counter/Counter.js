import React, { useState } from 'react';
import './Counter.scss';
function Counter() {
  const [
    counterValue,
    setCounterValue,
  ] = useState(0);
  const [
    inputValue,
    setInputValue,
  ] = useState(1);
  function subtract() {
    setCounterValue(
      counterValue - inputValue
    );
  }
  return (
    <div className="App">
      <div className="wrapper">
        <h1 data-testid="header">
          My Counter
        </h1>
        <p data-testid="counter">
          {counterValue}
        </p>
        <div className="btn-wrapper">
          <button
            className="btn"
            data-testid="substract-btn"
            onClick={subtract}
          >
            -
          </button>
          <input
            className="input"
            onChange={(e) =>
              setInputValue(
                e.target.value
              )
            }
            type="number"
            data-testid="input"
            value={inputValue}
            placeholder="increment/decrement by"
          />
          <button
            className="btn"
            data-testid="add-btn"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
export default Counter;
