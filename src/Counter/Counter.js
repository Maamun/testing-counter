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
  const addCounter = () => {
    setCounterValue(
      counterValue + Number(inputValue)
    );
  };
  return (
    <div className="App">
      <div className="wrapper">
        <h1 data-testid="header">
          My Counter
        </h1>
        <p
          data-testid="counter"
          className={
            counterValue > 0
              ? 'positive'
              : counterValue < 0
              ? 'negative'
              : null
          }
        >
          {counterValue}
        </p>
        <div className="btn-wrapper">
          <button
            className="btn"
            data-testid="substract-btn"
            onClick={() => {
              setCounterValue(
                counterValue -
                  Number(inputValue)
              );
            }}
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
            onClick={addCounter}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
export default Counter;
