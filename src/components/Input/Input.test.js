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
	describe('word has not been guessed', () => {
		test('renders the component without error', () => {});
		test('renders the input box', () => {});
		test('renders the submit button', () => {});
	});

	describe('word has been guessed', () => {
		test('renders the component without error', () => {});
		test('Does not render the input box', () => {});
		test('Does not render the submit button', () => {});
	});
});
describe('updating state', () => {});
