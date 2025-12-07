import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
  }

  function decrement() {
    setCount(prev => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="app">
      <div className="box">
        <h2 className="title">Simple Counter</h2>
        <div className="count-display">
          <span className="label">Count</span>
          <span className="value">{count}</span>
        </div>

        <div className="buttons">
          <button className="btn btn-dec" onClick={decrement}>
            −
          </button>
          <button className="btn btn-reset" onClick={reset}>
            Reset
          </button>
          <button className="btn btn-inc" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
