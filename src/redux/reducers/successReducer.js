import { CORRECT_GUESS } from '../actions/actionTypes';

export default (state = false, { type }) => {
	switch (type) {
		case CORRECT_GUESS:
			return true;
		default:
			return state;
	}
};
