import { CORRECT_GUESS, GUESS_WORD } from '../actions/actionTypes';

export default (state = [], action) => {
	switch (action.type) {
		case GUESS_WORD:
			return [...state, action.payload];

		default:
			return state;
	}
};
