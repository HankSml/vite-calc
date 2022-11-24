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
  const [calc, setCalc] = useState({
    symbol: "",
    num: 0,
    res: 0,
  })

  return (
          <div className="grid calc-container">
          <Screen value={calc.num? calc.num:calc.res} />
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
  )
}

export default App
