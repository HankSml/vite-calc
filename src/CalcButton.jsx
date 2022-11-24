import { useState } from "react";
import './CalcButton.css';

function CalcButton({symbol}) {
    return (
        <div className="button">
            <p>{symbol}</p>
        </div>
    )
}

export default CalcButton