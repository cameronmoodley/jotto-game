import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, storeFactory } from '../../../test/testUtils';
import Input from './Input';

const setUp = (initialState = {}) => {
	const store = storeFactory(initialState);
	const wrapper = shallow(<Input store={store} />)
		.dive()
		.dive();
	return wrapper;
};

describe('render', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setUp({ success: false });
	});
	describe('word has not been guessed', () => {
		test('renders the component without error', () => {
			const component = findByTestAttribute(wrapper, 'component-input');
			expect(component.length).toBe(1);
		});
		test('renders the input box', () => {
			const inputBox = findByTestAttribute(wrapper, 'input-box');
			expect(inputBox.length).toBe(1);
		});
		test('renders the submit button', () => {
			const button = findByTestAttribute(wrapper, 'submit-button');
			expect(button.length).toBe(1);
		});
	});

	describe('word has been guessed', () => {
		test('renders the component without error', () => {});
		test('Does not render the input box', () => {});
		test('Does not render the submit button', () => {});
	});
});
describe('updating state', () => {});
