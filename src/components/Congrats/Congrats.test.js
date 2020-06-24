import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProp } from '../../../test/testUtils';
import checkPropTypes from 'check-prop-types';

import Congrats from './Congrats';

const defaultProps = {
	success: false,
};

const setup = (props = {}) => {
	const setUpProps = { ...defaultProps, ...props };
	return shallow(<Congrats {...setUpProps} />);
};

test('renders Congrats component without erros', () => {
	const wrapper = setup();
	const component = findByTestAttribute(wrapper, 'component-congrats');
	expect(component.length).toBe(1);
});

test('renders no text when prop is false', () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttribute(wrapper, 'component-congrats');
	expect(component.text()).toBe('');
});

test('renders non empty congrats message when props is true', () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttribute(wrapper, 'congrats-message');
	expect(message.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
	const expectedProps = { success: false };
	checkProp(Congrats, expectedProps);
});
