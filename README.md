# The Favourite Killer

Project live at: https://the-favourite-killer.netlify.app


## Project Overview

It's a _Hangman_-based game developed using **ReactJS** and build with **Vite**. Build code resides at `dist` folder.  
The user is first asked to enter 10 of her favourite things and then, guess a random word correctly. Game ends when the user is able to guess the word correctly under 10 tries. Otherwise, with each incorrect try, one of the favourite item is removed.

### Dependencies

- nanoid *(Used to give unique IDs to the favourite items)*
- random-words *(Used to generate random words)*
- react
- react-dom
- vite

### React Components Structure

Following are the components and the states defined in those components

- App (`introShown`)
  - Main (`favThingsList`, `startGuessing`, `gameEnd`, `gameResult`)
    - FavouriteThings
    - GuessTheWord (`lettersArr`, `correctGuesses`, `incorrectGuesses`)
      - WordContainer
      - AlphabetsContainer
        - AlphabetButton (`isAlphabetClicked`, `isCorrectAlphabet`)  
       
  
***App***  
Base component that has `<header>` and `Main` component of the page.
It also sets a state variable called `introShown` which determines whether to show the initial instruction prompt or not.

***Main***  
Component that renders `<main>` part which in itself contains `.intro-section` section and 2 components, `FavouriteThings` and `GuessTheWord`.  

It sets 4 state variables:
  - `favThingsList`: It contains the 10 favourite items entered by the user.
  - `startGuessing`: It toggles `GuessTheWord` component when user has entered all the 10 items.
  - `gameEnd`: It tells whether the game has ended or not.
  - `gameResult`: It specifies whether the user has won or lost the game.

Its parent element, `<root>` is a *column flexbox container* so that the `<header>` occupies a fixed space and the remaining space is occupied by the `<main>`. Further, it's a *row flexbox* for its contents.

***FavouriteThings***  
It renders the section `.fav-things-section` which contains a form `#fav-things-form` for adding the favourite items, a container `#fav-things-container` for displaying those items and a button, `#guess-word-btn` for the user to guess the word.

***GuessTheWord***  
It displays the section `.guess-the-word-section` which contains few paragraphs for prompts and 1 components, `WordContainer` which displays the random word and `AlphabetsContainer` which contains 26 buttons for every alphabet to be choosen individually by the user.

It sets 3 state variables:  
  - `lettersArr`: Array of letters that forms the random word.
  - `correctGuesses`: Number of correct guesses which if it matches the length of the array `lettersArr` results in a winning game.
  - `incorrectGuesses`: Number of incorrect guesses which if it equals to 10 results in a losing game.

***AlphabetsContainer***  
It has a `alphabets-container` which has a *grid layout* for all the buttons.

***AlphabetButton***
Each button corresponds to one alphabet which when clicked either correctly guesses one letter of the word or removes one favourite item in case of an incorrect guess.

It has 2 state variables:  
  - `isAlphabetClicked`: When it is `true`, it disables that button, i.e., the button can be clicked atmost once.
  - `isCorrectAlphabet`: It styles the button depending upon whether its `true`/`false`.
