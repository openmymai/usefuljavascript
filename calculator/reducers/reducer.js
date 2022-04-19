import { formatNumberByLocale, getOperand } from '../helpers';

export const initialState = {
    firstOperand: '',
    secondOperand: '',
    operator: undefined,
    display: '0',
    clearLabel: 'AC',
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_DIGIT':
            const operandKey = getOperand(state);
            let valueToAppend = action.operandValue;
            if (valueToAppend === '.') {
                valueToAppend = /\./.test(state.display) ? '' : valueToAppend;
                valueToAppend = state[operandKey] === '' ? '0.' : valueToAppend;
            }

            const nextValue = state[operandKey] + valueToAppend;

            return {
                ...state,
                [operandKey]: nextValue,
                display: formatNumberByLocale(nextValue),
                clearLabel: 'C',
            };

        case 'SET_OPERATOR':
            return {
                ...state,
                operator: action.operator,
                firstOperand: state.firstOperand === '' ? state.display : state.firstOperand,
            };

        case 'TOGGLE_PLUS_MINUS':
            const operand = getOperand(state);
            const signedValue = Number(state[operand] || state.display) * -1 + '';

            return {
                ...state,
                [operand]: signedValue,
                display: formatNumberByLocale(signedValue),
            };

        case 'CLEAR':
            const newState = { clearLabel: 'AC' };

            if (state.secondOperand !== '') {
                newState.firstOperand = state.firstOperand;
                newState.operator = state.operator;
            } else if (state.operator) {
                newState.firstOperand = state.firstOperand;
                newState.display = state.display;
            }

            return {
                ...initialState,
                ...newState,
            };

        case 'CALCULATE':
            const { type, display, ...rest } = action;
            return { ...state, display: formatNumberByLocale(display), ...rest };

        case 'ERROR':
            return { ...state, display: 'Error' };

        default:
            return state;
    }
}

export default reducer;
