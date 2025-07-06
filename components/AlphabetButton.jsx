import React from "react";


export default function AlphabetButton(props) {
	const [isAlphabetClicked, setIsAlphabetClicked] = React.useState(false);
	const [isCorrectAlphabet, setIsCorrectAlphabet] = React.useState(undefined); // Beware: Its a FALSY VALUE only

	function handleAlphabetClick(evt) {
		setIsAlphabetClicked(true);

		const newLettersArr = [...props.lettersArr];

		let anyLetterMatch = false;
		let matchCount = 0;
		for (let i = 0; i < props.lettersArr.length; i++) {

			if (props.lettersArr[i].letter === evt.target.value) {
				
				anyLetterMatch = true;
				newLettersArr[i].isGuessed = true;
				matchCount += 1;
			}
		}

		if (anyLetterMatch) {
			// When 1 or multiple letters are guessed correctly when an alphabet is clicked
			props.setLettersArr(lettersArr => newLettersArr);
			setIsCorrectAlphabet(true);

			props.setCorrectGuesses(correctGuesses => correctGuesses += matchCount);
		}
		else {
			// When no letter is guessed when an alphabet is clicked
			let favThingToBeDead_Index = props.favThingsList.findIndex(favThing => favThing.isAlive === true);

			const newFavThingsList = [...props.favThingsList];
			newFavThingsList[favThingToBeDead_Index].isAlive = false;

			props.setFavThingsList(favThingsList => newFavThingsList);
			setIsCorrectAlphabet(false);

			props.setIncorrectGuesses(incorrectGuesses => incorrectGuesses += 1);

		}
	}

	return (
		<button 
			onClick={ handleAlphabetClick }
			value={ props.alphabet }
			className={ isAlphabetClicked ? (isCorrectAlphabet ? "correct-alphabet" : "incorrect-alphabet") : undefined }
			disabled={ isAlphabetClicked || props.gameEnd }
		>
				{ props.alphabet }
		</button>
	);
}