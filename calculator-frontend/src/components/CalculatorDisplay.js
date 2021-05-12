import React from "react";
import "./CalculatorDisplay.css";

export const CalculatorDisplay = props => {
    return (
        <div className="display">{props.display}</div>
    );
}