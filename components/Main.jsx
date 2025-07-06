import React from "react";
import FavouriteThings from "./FavouriteThings.jsx";
import GuessTheWord from "./GuessTheWord.jsx";

export default function Main(props) {
	const [favThingsList, setFavThingsList] = React.useState([]);
	const [startGuessing, setStartGuessing] = React.useState(false);
	const [gameEnd, setGameEnd] = React.useState(false);
	const [gameResult, setGameResult] = React.useState(undefined); // Beware: Its a FALSY VALUE only


	return (
		<main className={ props.introShown ? "game-not-started" : undefined }>
			{ props.introShown &&

			<section className="intro-section">
				<p>
					Bet 10 of your favourite things in life to guess a word. If you can guess it successfully, all of them will be spared. Otherwise, be ready to lose them all.
				</p>
				<button onClick={ () => props.setIntroShown(false) } id="start-game-btn">Start Game</button>
			</section>
			}

			{ !props.introShown &&

			<FavouriteThings
				favThingsList={ favThingsList }
				setFavThingsList={ setFavThingsList }
				startGuessing={ startGuessing }
				setStartGuessing={ setStartGuessing }
			/>
			}

			{ startGuessing && 

			<GuessTheWord 
				setStartGuessing={ setStartGuessing }
				favThingsList={ favThingsList }
				setFavThingsList={ setFavThingsList }
				
				gameEnd={ gameEnd }
				setGameEnd={ setGameEnd } 
				gameResult={ gameResult } 
				setGameResult={ setGameResult }
			/>
			}
		</main>
	);
}