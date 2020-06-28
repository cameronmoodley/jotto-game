import { getLetterMatchCount } from '../../helpers/';
import { CORRECT_GUESS, GUESS_WORD } from './actionTypes';

export const guessWord = (guessedWord) => {
	return (dispatch, getState) => {
		const secretWord = getState().secretWord;
		const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

		dispatch({
			type: GUESS_WORD,
			payload: {
				guessedWord,
				letterMatchCount,
			},
		});

		guessedWord === secretWord && dispatch({ type: CORRECT_GUESS });
	};
};
