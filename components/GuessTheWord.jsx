import React from "react";
import { generate } from "random-words";
import WordContainer from "./WordContainer.jsx";
import AlphabetsContainer from "./AlphabetsContainer.jsx";


export default function GuessTheWord(props) {
	const randomWord = React.useRef(generate({
		exactly: 1,
		minLength: 3,
		maxLength: 10,
		formatter: (word) => word.toUpperCase()
	})).current[0];

	const [lettersArr, setLettersArr] = React.useState(() => generateLetters());
	const [correctGuesses, setCorrectGuesses] = React.useState(0);
	const [incorrectGuesses, setIncorrectGuesses] = React.useState(0);

	// Called only when the `GuessTheWord` apprears first time
	function generateLetters() {
		return randomWord.split("").map(letter => {
			return {
				letter,
				isGuessed: false
			};
		});
	}


	function newGame() {
		props.setFavThingsList([]);
		props.setStartGuessing(false);
		props.setGameEnd(false);
		props.setGameResult(undefined);
	}


	React.useEffect(() => {
		if (correctGuesses === lettersArr.length) {
			const newFavThingsList = props.favThingsList.map(favThing => {
				return {
					favourite: favThing.favourite,
					isAlive: true,
					id: favThing.id
				}
			});

			props.setFavThingsList(favThingsList => newFavThingsList);

			props.setGameEnd(true);
			props.setGameResult(true);
		}

		if (incorrectGuesses === 10) {
			props.setGameEnd(true);
			props.setGameResult(false);
		}

	}, [correctGuesses, incorrectGuesses]);


	return (
		<section className="guess-the-word-section">
			{ !props.gameEnd &&
			
			<p id="instr-para">Click on the letters to guess the word under 10 attempts or risk losing it all...</p>

			}

			{ props.gameEnd && props.gameResult &&

			<p id="gameWon-para">
				<span>Congratulations! You won! &#127881;</span>
				All your favourite things are spared.
			</p>

			}

			{ props.gameEnd && !props.gameResult &&

			<p id="gameLost-para">
				<span>Game Over!! &#128128;</span>
				Be ready to lose everything.
			</p>

			}

			<WordContainer lettersArr={ lettersArr } gameEnd={ props.gameEnd } />

			<AlphabetsContainer 
				lettersArr={ lettersArr } 
				setLettersArr={ setLettersArr } 
				favThingsList={ props.favThingsList }
				setFavThingsList={ props.setFavThingsList }

				setCorrectGuesses={ setCorrectGuesses }
				setIncorrectGuesses={ setIncorrectGuesses }

				gameEnd={ props.gameEnd }
			/>

			{ props.gameEnd && <button onClick={ newGame } id="new-game-btn">New Game</button> }
		</section>
	);
}