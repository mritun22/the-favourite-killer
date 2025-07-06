import React from "react";
import Main from "./components/Main.jsx";

export default function App() {
	const [introShown, setIntroShown] = React.useState(true);

	return (
		<>
			<header>
				<h1>&#128128; The Favourite Killer &#128128;</h1>
			</header>
			<Main
				introShown={ introShown }
				setIntroShown={ setIntroShown }
			/>
		</>
	);
}