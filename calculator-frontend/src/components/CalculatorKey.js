import React, { useState } from 'react';
import "./CalculatorKey.css";

const isOperator = val => {
    return !isNaN(val) || val === '.' || val === '=';
}
export const CalculatorKey = props => {
    return (
        <div 
            className={`calculatorKey-wrapper ${isOperator(props.children) ? null : "operator"}`}
            onClick={() => {
                props.children === "x" ? props.handleClick("*") : props.handleClick(props.children);
            }}
        >
                {props.children}
        </div>
    );
}