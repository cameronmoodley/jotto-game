import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProp } from '../../../test/testUtils';
import checkPropTypes from 'check-prop-types';
import GuessedWords from './GuessedWords';

const defaultProps = {
	guessedWords: [
		{
			guessedWord: 'train',
			letterMatchCount: 3,
		},
	],
};

const setUp = (props = {}) => {
	const setUpProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setUpProps} />);
};

test('does not throw warning with expected props', () => {
	checkProp(GuessedWords, defaultProps);
});

describe('There are no words guessed', () => {
	let wrapper;

	// this code will run before each test
	beforeEach(() => {
		wrapper = setUp({ guessedWords: [] });
	});

	test('renders without error', () => {
		const component = findByTestAttribute(wrapper, 'component-guessed-words');
		expect(component.length).toBe(1);
	});
	test('renders instructions to guess a word', () => {
		const instructions = findByTestAttribute(wrapper, 'guess-instructions');
		expect(instructions.text().length).not.toBe(0);
	});
});

describe('There are words guessed', () => {});
