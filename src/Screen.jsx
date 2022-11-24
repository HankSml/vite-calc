import { useState } from 'react'
import './Screen.css'

function Screen() {
    const [numberDisplay, setNumberDisplay] = useState(0)

    return (
        <div className="display">
            <h2>Test</h2>
        </div>
    )
}

export default Screen