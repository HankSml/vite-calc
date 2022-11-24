import { useState } from "react";
import './CalcButton.css';

function CalcButton({symbol, type}) {
    return (
        <div className={type + " button-outer"}>
            <div className={"button-inner"}>
                <h3>{symbol}</h3>
            </div>
        </div>
    )
}

export default CalcButton