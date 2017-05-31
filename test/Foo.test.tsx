import * as React from 'react';

import { expect } from 'chai';
import { mount } from 'enzyme';

import Foo from 'Foo';

describe('<Foo />', () => {
    it('should render', () => {
        const element = (
            <Foo />
        );

        const wrapper = mount(element);
        const root = wrapper.getDOMNode();

        expect(root.className).to.equal('foo');
    });
});
