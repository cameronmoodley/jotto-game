import successReducer from './successReducer';
import { CORRECT_GUESS } from '../actions/actionTypes';

test('returns default state of false when no action is passed', () => {
	const newState = successReducer(undefined, {});
	expect(newState).toBe(false);
});
test('returns state of true when receiving an action of type CORRECT_GUESS', () => {
	const newState = successReducer(undefined, { type: CORRECT_GUESS });
	expect(newState).toBe(true);
});
