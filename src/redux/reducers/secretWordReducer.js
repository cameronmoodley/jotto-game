import { SET_SECRET_WORD } from '../actions/actionTypes';

export default (state = null, { type, payload }) => {
	switch (type) {
		case SET_SECRET_WORD:
			return payload;

		default:
			return state;
	}
	return state;
};
