import React from "react";
import { nanoid } from "nanoid";

export default function FavouriteThings(props) {	
	const favThingsListSPAN = props.favThingsList.map(favThing => {
		return (
			<span key={ favThing.id }>
				{ favThing.favourite[0].toUpperCase() + favThing.favourite.slice(1) }
				<span className={ favThing.isAlive ? undefined : "dead" }></span>
			</span>
		);
	});

	function addFavourite(formData) {
		let favourite = formData.get("favourite");

		// Add `favourite` only if there are less than 10 favourites
		if (props.favThingsList.length < 10) {

			// Check there's atleast one favourite AND the `favourite` which is going to be added is DUPLICATE
			if ((props.favThingsList.length >= 1) && (props.favThingsList.some(favThing => favThing.favourite.toLowerCase() === favourite.toLowerCase()))) {
				alert("You have already added it in your favourite list");
				return;
			}

			props.setFavThingsList((favThingsList) => {
				const newFavThingsList = [...favThingsList, {
					favourite: favourite,
					isAlive: true,
					id: nanoid()
				}];

				return newFavThingsList;
			});
		}
		else {
			alert("More than 10 items are not allowed in your favourite list");
		}		
	}


	return (
		<section className="fav-things-section">
			{ !props.startGuessing &&

			<form action={ addFavourite } id="fav-things-form">
				<label htmlFor="fav-thing-input">
					Enter 10 of your favourite things one by one
					<input type="text" name="favourite" id="fav-thing-input" minLength="3" maxLength="40" required />
				</label>

				<button type="submit" id="fav-thing-add-btn">Add</button>
			</form>
			}

			{ props.favThingsList.length != 0 &&
			
			<div className="fav-things-container">
				{ favThingsListSPAN }
			</div>
			}

			{ (props.favThingsList.length === 10) && (!props.startGuessing) &&

			<button onClick={ () => props.setStartGuessing(true) } id="guess-word-btn">Guess The Word!</button>
			}
		</section>
	);
}