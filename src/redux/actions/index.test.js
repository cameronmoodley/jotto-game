import { correctGuess } from './';
import { CORRECT_GUESS } from './actionTypes';

describe('correctGuess', () => {
	test('returns an action with type CORRECT guess', () => {
		const action = correctGuess();
		// cant use toBe on objects and arrays, mutable objects
		expect(action).toEqual({ type: CORRECT_GUESS });
	});
});
