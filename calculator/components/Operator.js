import React from 'react';
import { performOperation } from '../helpers';

function Operator({ children, state, dispatch }) {
    function handleClick() {
        try {
            if (state.secondOperand !== '') {
                const result = performOperation(state) + '';
                const isEqualsSign = children === '=';
                dispatch({
                    type: 'CALCULATE',
                    display: result,
                    operator: isEqualsSign ? undefined : children,
                    firstOperand: isEqualsSign ? '' : result,
                    secondOperand: '',
                });
            } else {
                dispatch({ type: 'SET_OPERATOR', operator: children });
            }
        } catch (e) {
            dispatch({ type: 'ERROR' });
        }
    }

    return (
        <button onClick={handleClick} className="operator">
            {children}
        </button>
    );
}

export default Operator;
