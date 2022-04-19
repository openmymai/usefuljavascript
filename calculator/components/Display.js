import React from 'react';

function Display({ children }) {
    return (
        <>
            <img src="logo.png" alt="logo" width="200" /> <div className="display">{children}</div>
        </>
    );
}

export default Display;
