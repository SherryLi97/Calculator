import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { CalculatorKey } from './components/CalculatorKey';
import { CalculatorDisplay } from './components/CalculatorDisplay';
import { ClearButton } from './components/ClearButton';
import { evaluate } from "mathjs";

function App() {
  const [display, setDisplay] = useState("");
  const [calcResults, setCalcResults] = useState([]);
  const numOfCalcResultsDisplay = 10;
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:8080/calc2');
    ws.current.onmessage = function(data) {
      setCalcResults(calcResults => [...calcResults, data.data]);
    }
    return () => {
      // Remove web socket
      ws.current.close();
    }
  }, [])

  const handleAdd = val => {
    setDisplay(display + val);
  };

  const handleEqual = () => {   
    setDisplay(evaluate(display));
    ws.current.send(display+"="+evaluate(display));
  }

  return (
    <div className="app">
      <div className="calculator-wrapper">
        <CalculatorDisplay display={display}/>
        <div className="row">
          <CalculatorKey handleClick={handleAdd}>7</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>8</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>9</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>/</CalculatorKey>
        </div>
        <div className="row">
          <CalculatorKey handleClick={handleAdd}>4</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>5</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>6</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>x</CalculatorKey>
        </div>
        <div className="row">
          <CalculatorKey handleClick={handleAdd}>1</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>2</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>3</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>+</CalculatorKey>
        </div>
        <div className="row">
          <CalculatorKey handleClick={handleAdd}>.</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>0</CalculatorKey>
          <CalculatorKey handleClick={handleEqual}>=</CalculatorKey>
          <CalculatorKey handleClick={handleAdd}>-</CalculatorKey>
        </div>
        <div className="row">
            <ClearButton handleClear={() => setDisplay("")}>
              Clear
            </ClearButton>
        </div>
      </div>
      <div className="displayToAll">
        <div className="history">History</div>
        {
          calcResults.slice(-1 * numOfCalcResultsDisplay).map((e,index) => {
            return (
              <div className="res" key={index}>{e}</div>
            )
          })
        }
        <div></div>
      </div>
    </div>
  );
}

export default App;
