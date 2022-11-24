import { useState } from 'react'
import './NumberDisplay.css'

function NumberDisplay() {
    const [numberDisplay, setNumberDisplay] = useState(0)

    return (
        <div className="display">
            <h2>Test</h2>
        </div>
    )
}

export default NumberDisplay