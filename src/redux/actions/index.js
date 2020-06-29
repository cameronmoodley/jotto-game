import axios from 'axios';
import { getLetterMatchCount } from '../../helpers/';
import { CORRECT_GUESS, GUESS_WORD, SET_SECRET_WORD } from './actionTypes';

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

export const getSecretWord = () => {
	return (dispatch) => {
		return axios.get('http://localhost:3030/').then((response) => {
			dispatch({
				type: SET_SECRET_WORD,
				payload: response.data,
			});
		});
	};
};
