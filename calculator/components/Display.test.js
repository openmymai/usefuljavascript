import React from 'react';
import { shallow } from 'enzyme';

import Display from './Display';

describe('Display component', () => {
    it('should render logo and display', () => {
      const wrapper = shallow(<Display>5</Display>);

        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('.display').text()).toBe('5');
    });

});
