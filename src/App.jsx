import { useState } from 'react'
import './App.css'
import NumberDisplay from './NumberDisplay'
import CalcButton from './CalcButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="calcContainer">
          <div className="grid">
          <NumberDisplay />
          <CalcButton symbol={"C"} />
          <CalcButton symbol={"%"} />
          <CalcButton symbol={"/"} />
          <CalcButton symbol={"*"} />
          <CalcButton symbol={"7"} />
          <CalcButton symbol={"8"} />
          <CalcButton symbol={"9"} />
          <CalcButton symbol={"4"} />
          <CalcButton symbol={"5"} />
          <CalcButton symbol={"6"} />
          <CalcButton symbol={"1"} />
          <CalcButton symbol={"2"} />
          <CalcButton symbol={"3"} />
      </div>
    </div>
  )
}

export default App
