import { useState } from 'react'
import './App.css'
import NumberDisplay from './NumberDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid">
        <NumberDisplay />
        <div className="itemB">B</div>
        <div className="itemC">C</div>
        <div className="itemD">D</div>
    </div>
  )
}

export default App
