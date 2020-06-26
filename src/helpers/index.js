export function getLetterMatchCount(guessedWord, secretWord) {
	const secrectLetterSet = new Set(secretWord.split(''));
	const guessedLetterSet = new Set(guessedWord.split(''));
	return [...secrectLetterSet].filter((letter) => guessedLetterSet.has(letter))
		.length;
}
