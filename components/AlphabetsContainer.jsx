import React from "react";
import AlphabetButton from "./AlphabetButton.jsx";


export default function AlphabetsContainer(props) {
	const alphabets = React.useRef(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]).current;
	
	const alphabetsBUTTON = alphabets.map((alphabet, index) => {
		return (
			<AlphabetButton
				key={ index }
				alphabet={ alphabet }

				lettersArr={ props.lettersArr }
				setLettersArr={ props.setLettersArr }
				favThingsList={ props.favThingsList }
				setFavThingsList={ props.setFavThingsList }

				setCorrectGuesses={ props.setCorrectGuesses }
				setIncorrectGuesses={ props.setIncorrectGuesses }

				gameEnd={ props.gameEnd }
			/>
		);
	});
	

	return (
		<div id="alphabets-container">
			{ alphabetsBUTTON }
		</div>
	);
}