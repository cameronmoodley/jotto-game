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

describe('There are words guessed', () => {
	let wrapper;
	const guessedWords = [
		{
			guessedWord: 'train',
			letterMatchCount: 3,
		},
		{
			guessedWord: 'agile',
			letterMatchCount: 1,
		},
		{
			guessedWord: 'party',
			letterMatchCount: 5,
		},
	];
	beforeEach(() => {
		wrapper = setUp({ guessedWords });
	});
	test('renders without error', () => {
		const component = findByTestAttribute(wrapper, 'component-guessed-words');
		expect(component.length).toBe(1);
	});
	test('renders guessed words section', () => {
		const guessedWordsNode = findByTestAttribute(wrapper, 'guessed-words');
		expect(guessedWordsNode.length).toBe(1);
	});
	test('displays correct number of guessed words', () => {
		const guessedWordNodes = findByTestAttribute(wrapper, 'guessed-word');
		expect(guessedWordNodes.length).toBe(guessedWords.length);
	});
});
