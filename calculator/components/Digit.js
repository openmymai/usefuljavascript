import React from 'react';

function Digit({ children, className = '', state, dispatch }) {
    function handleClick() {
        dispatch({ type: 'SET_DIGIT', operandValue: children });
    }

    return (
        <button onClick={handleClick} className={`digit ${className}`}>
            {children}
        </button>
    );
}

export default Digit;
