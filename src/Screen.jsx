import { useState } from 'react'
import './Screen.css'

function Screen() {
    const [numberDisplay, setNumberDisplay] = useState(0)

    return (
        <div className="display-outer">
            <div className="display-inner">
                <h2>Test</h2>
            </div>
        </div>
    )
}

export default Screen