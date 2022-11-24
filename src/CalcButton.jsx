import { useState } from "react";
import './CalcButton.css';

function CalcButton({symbol, type}) {
    return (
        <div className={"button " + type}>
            <p>{symbol}</p>
        </div>
    )
}

export default CalcButton