import { useState } from 'react'
import './App.css'
import Screen from '../Screen/Screen'
import CalcButton from '../CalcButton/CalcButton'
import handleMath from '../utils'

const buttonValues = [
  ["C", "%", "/", "*"],
  ["7", "8", "9", "-"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "="],
  ["0", ".", "DEL"]
]



function App() {
  const [display, setDisplay] = useState({
    onScreen: ""
  })

  function handleClick(e) {
    setDisplay(display + e.target.value);
  }

  return (
          <div className="grid calc-container">
          <Screen value={display.onScreen} />
          {buttonValues.flat().map((symbol, index) => {
            return (
              <CalcButton 
                symbol = {symbol}
                type = {symbol === "="? "evaluate":"generic"}
                onScreen = {display.onScreen}
                key = {index}
                onClick={handleClick}
              />
            )}
          )}
      </div>
  )
}

export default App
