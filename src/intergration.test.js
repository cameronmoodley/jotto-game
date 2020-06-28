import { storeFactory } from '../test/testUtils';
import { guessWord } from './redux/actions/';

describe('guessWord action dispatcher', () => {
	const secretWord = 'party';
	const wrongWord = 'train';
	describe('no guessed words', () => {
		let store;
		const initialState = { secretWord };
		beforeEach(() => {
			store = storeFactory(initialState);
		});
		test('updates states correctly for an unsuccessful guess', () => {
			store.dispatch(guessWord(wrongWord));
			const expectedState = {
				...initialState,
				success: false,
				guessedWords: [
					{
						guessedWord: wrongWord,
						letterMatchCount: 3,
					},
				],
			};
			const newState = store.getState();
			expect(newState).toEqual(expectedState);
		});
		test('updates states correctly for a successful guess', () => {
			store.dispatch(guessWord(secretWord));
			const expectedState = {
				...initialState,
				success: true,
				guessedWords: [
					{
						guessedWord: secretWord,
						letterMatchCount: 5,
					},
				],
			};
			const newState = store.getState();
			expect(newState).toEqual(expectedState);
		});
	});

	describe('some guessed words', () => {
		const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
		const initialState = {
			guessedWords,
			secretWord,
		};
		let store;
		beforeEach(() => {
			store = storeFactory(initialState);
		});
		test('updates states correctly for an unsuccessful guess', () => {
			store.dispatch(guessWord(wrongWord));
			const newState = store.getState();

			const expectedState = {
				secretWord,
				success: false,
				guessedWords: [
					...guessedWords,
					{ guessedWord: wrongWord, letterMatchCount: 3 },
				],
			};

			expect(newState).toEqual(expectedState);
		});
		test('updates states correctly for a successful guess', () => {
			store.dispatch(guessWord(secretWord));
			const newState = store.getState();

			const expectedState = {
				secretWord,
				success: true,
				guessedWords: [
					...guessedWords,
					{ guessedWord: secretWord, letterMatchCount: 5 },
				],
			};

			expect(newState).toEqual(expectedState);
		});
	});
});
