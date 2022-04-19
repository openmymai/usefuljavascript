import React from 'react';
import { shallow } from 'enzyme';
import Digit from './Digit';

describe('Digit component', () => {
    it('should render digit and add className', () => {
        const { wrapper } = renderDigit(5, 'foobar');

        expect(wrapper.text()).toBe('5');
        expect(wrapper.is('.foobar')).toBe(true);
    });

    it('should dispatch DIGIT_CLICK action for firstOperand when there is no operator', () => {
        const { wrapper, dispatch } = renderDigit(5, '', {});
        wrapper.simulate('click');

        expect(dispatch).toHaveBeenCalledWith({ type: 'SET_DIGIT', operandValue: 5 });
    });

    it('should dispatch DIGIT_CLICK action for secondOperand when operator is present', () => {
        const { wrapper, dispatch } = renderDigit(5, '', { operator: '+' });
        wrapper.simulate('click');

        expect(dispatch).toHaveBeenCalledWith({ type: 'SET_DIGIT', operandValue: 5 });
    });
});

function renderDigit(children, className, state) {
    const props = { children, className, state, dispatch: jest.fn() };
    const wrapper = shallow(<Digit {...props} />).find('button');
    return { wrapper, dispatch: props.dispatch };
}
