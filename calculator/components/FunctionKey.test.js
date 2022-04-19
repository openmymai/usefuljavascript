import React from 'react';
import { shallow } from 'enzyme';
import FunctionKey from './FunctionKey';

describe('FunctionKey component', () => {
    it('should render function key and className', () => {
        const { wrapper } = renderFunctionKey('AC', 'foobar');

        expect(wrapper.text()).toBe('AC');
        expect(wrapper.is('.foobar')).toBe(true);
    });

    it('should dispatch passed action type', () => {
        const { wrapper, dispatch } = renderFunctionKey('AC', '', 'FOO_BAR');
        wrapper.simulate('click');

        expect(dispatch).toHaveBeenCalledWith({ type: 'FOO_BAR' });
    });
});

function renderFunctionKey(children, className, type) {
    const props = { children, className, type, dispatch: jest.fn() };
    const wrapper = shallow(<FunctionKey {...props} />).find('button');
    return { wrapper, dispatch: props.dispatch };
}
