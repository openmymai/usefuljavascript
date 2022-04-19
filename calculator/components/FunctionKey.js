import React from 'react';

function FunctionKey({ children, className = '', dispatch, type }) {
    function handleClick() {
        dispatch({ type });
    }

    return (
        <button onClick={handleClick} className={`function-key ${className}`}>
            {children}
        </button>
    );
}

export default FunctionKey;
