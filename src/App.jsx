import { useState } from 'react'
import './App.css'
import Screen from './Screen'
import CalcButton from './CalcButton'

const buttonValues = [
  ["C", "%", "/", "*"],
  ["7", "8", "9", "-"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "="],
  ["0", ".", "DEL"]
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="calcContainer">
          <div className="grid">
          <Screen />
          {buttonValues.flat().map((symbol, index) => {
            return (
              <CalcButton 
                symbol = {symbol}
                type = {symbol === "="? "evaluate":"generic"}
                key = {index}
              />
            )}
          )}
      </div>
    </div>
  )
}

export default App
