export default function WordContainer(props) {
	const letterDIV = props.lettersArr.map((letterObj, index) => {
		return (
			<div key={ index } className="letter-container">
				<div 
					className={ (!letterObj.isGuessed && props.gameEnd) ? "incorrect-letter" : undefined }
				>
					{ (letterObj.isGuessed && letterObj.letter) || (!letterObj.isGuessed && props.gameEnd && letterObj.letter) }
				</div>
			</div>	
		);
	});


	return (
		<div id="word-container">
			{ letterDIV }
		</div>
	);

}