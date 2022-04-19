import React, { useReducer } from 'react';

import { reducer, initialState } from '../reducers';

import Display from '../components/Display';
import digit from '../components/Digit';
import operator from '../components/Operator';
import functionKey from '../components/FunctionKey';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const wrapper = (Component, props) => <Component {...props} state={state} dispatch={dispatch} />;

    const Digit = props => wrapper(digit, props);
    const Operator = props => wrapper(operator, props);
    const FunctionKey = props => wrapper(functionKey, props);

    return (
        <div className="calculator">
            <Display>{state.display}</Display>

            <div className="keys">
                <FunctionKey type="CLEAR" className="two-columns">
                    {state.clearLabel}
                </FunctionKey>
                <FunctionKey type="TOGGLE_PLUS_MINUS">±</FunctionKey>
                <Operator>÷</Operator>
                <br />

                <Digit>7</Digit>
                <Digit>8</Digit>
                <Digit>9</Digit>
                <Operator>×</Operator>
                <br />

                <Digit>4</Digit>
                <Digit>5</Digit>
                <Digit>6</Digit>
                <Operator>-</Operator>
                <br />

                <Digit>1</Digit>
                <Digit>2</Digit>
                <Digit>3</Digit>
                <Operator>+</Operator>
                <br />

                <Digit className="two-columns">0</Digit>
                <Digit>.</Digit>
                <Operator>=</Operator>
            </div>
        </div>
    );
}

export default App;