import React from 'react';
import { shallow } from 'enzyme';
import Operator from './Operator';

describe('Operator component', () => {
    it('should render operator', () => {
        const { wrapper } = renderOperator('+');

        expect(wrapper.text()).toBe('+');
    });

    it('should dispatch SET_OPERATOR action when only firstOperand is present', () => {
        const { wrapper, dispatch } = renderOperator('+', { firstOperand: '2', secondOperand: '', operator: '+' });
        wrapper.simulate('click');

        expect(dispatch).toHaveBeenCalledWith({
            type: 'SET_OPERATOR',
            operator: '+',
        });
    });

    it('should dispatch CALCULATE action when both operands are present', () => {
        const { wrapper, dispatch } = renderOperator('+', { firstOperand: '2', secondOperand: '3' });
        wrapper.simulate('click');

        expect(dispatch).toHaveBeenCalledWith({
            type: 'CALCULATE',
            display: '5',
            firstOperand: '5',
            operator: '+',
            secondOperand: '',
        });
    });

    describe('when clicking the equals (=) operator', () => {
        it('should clear the operator and firstOperand value when dispatching the CALCULATE action in order to clear the stage for subsequent calculations', () => {
            const { wrapper, dispatch } = renderOperator('=', { firstOperand: '5', secondOperand: '1', operator: '-' });
            wrapper.simulate('click');

            expect(dispatch).toHaveBeenCalledWith({
                type: 'CALCULATE',
                display: '4',
                firstOperand: '',
                operator: undefined,
                secondOperand: '',
            });
        });
    });

    describe('when clicking an operator other than equals', () => {
        it('should include operator and firstOperand as payload when dispatching the CALCULATE action in order to treat the result as the firstOperand of a subsequent calculation', () => {
            const { wrapper, dispatch } = renderOperator('+', { firstOperand: '5', secondOperand: '1', operator: '-' });
            wrapper.simulate('click');

            expect(dispatch).toHaveBeenCalledWith({
                type: 'CALCULATE',
                display: '4',
                firstOperand: '4',
                operator: '+',
                secondOperand: '',
            });
        });
    });

    it('should dispatch ERROR action in case of exceptions', () => {
        const { wrapper, dispatch } = renderOperator('+');
        wrapper.simulate('click');

        expect(dispatch).toHaveBeenCalledWith({ type: 'ERROR' });
    });
});

function renderOperator(children, state) {
    const props = { children, state, dispatch: jest.fn() };
    const wrapper = shallow(<Operator {...props} />).find('button');
    return { wrapper, dispatch: props.dispatch };
}
