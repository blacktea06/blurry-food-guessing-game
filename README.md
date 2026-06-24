# Web Development Project 3 - *Blurry Food Guessing Game*

Submitted by: **Paris-Riana Campbell**

This web app: **A React-based flashcard guessing game where users try to identify different foods from blurred images. Users type their guess into an input box and get instant visual feedback on whether they were right or wrong before flipping the card. They can switch between food categories, navigate through an ordered deck with previous/next buttons, shuffle the deck, and track their current and longest correct-answer streaks. Each category has its own themed card background.**

Time spent: **12** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess into an input box *before* seeing the flipside of the card**
  - Application features a clearly labeled input box with a submit button where users can type in a guess
  - Clicking on the submit button with an **incorrect** answer shows visual feedback that it is wrong 
  -  Clicking on the submit button with a **correct** answer shows visual feedback that it is correct
- [x] **The user can navigate through an ordered list of cardss**
  - A forward/next button displayed on the card navigates to the next card in a set sequence when clicked
  - A previous/back button displayed on the card returns to the previous card in the set sequence when clicked
  - Both the next and back buttons should have some visual indication that the user is at the beginning or end of the list (for example, graying out and no longer being available to click), not allowing for wrap-around navigation

The following **optional** features are implemented:


- [x] Users can use a shuffle button to randomize the order of the cards
  - Cards should remain in the same sequence (**NOT** randomized) unless the shuffle button is clicked 
  - Cards should change to a random sequence once the shuffle button is clicked
- [ ] A user’s answer may be counted as correct even when it is slightly different from the target answer
  - Answers are considered correct even if they only partially match the answer on the card 
  - Examples: ignoring uppercase/lowercase discrepancies, ignoring punctuation discrepancies, matching only for a particular part of the answer rather than the whole answer
- [x] A counter displays the user’s current and longest streak of correct responses
  - The current counter increments when a user guesses an answer correctly
  - The current counter resets to 0 when a user guesses an answer incorrectly
  - A separate counter tracks the longest streak, updating if the value of the current streak counter exceeds the value of the longest streak counter 
- [ ] A user can mark a card that they have mastered and have it removed from the pool of displayed cards
  - The user can mark a card to indicate that it has been mastered
  - Mastered cards are removed from the pool of displayed cards and added to a list of mastered cards


The following **additional** features are implemented:

* [x] Multiple food categories (Sweets and Dinner) that the user can switch between
* [x] Custom themed card backgrounds that change based on the selected category
* [x] 3D card flip animation to reveal the answer
* [x] Case-insensitive answer matching (guesses are lowercased and trimmed before comparison)
* [x] A card counter showing the current position in the deck (e.g. "Card 3 / 9") and the total number of cards in the category
* [x] Reusable `Card` React component and food data organized into separate category decks
* [x] Decorative food images with hover animations in the header

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![Video Walkthrough](./public/blurry%20food%20guessing%20game%20gif%202.0.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ScreenToGif

## Notes

The main challenges included creating the 3D card flip animation, layering the food images on top of the themed card backgrounds, and managing React state when switching categories and shuffling the deck. Resetting the flip, guess, and feedback states correctly every time the user navigates to a new card or changes category also took some careful state handling. Adding the streak counters required tracking both the current streak and updating the longest streak whenever it was exceeded.

## License

    Copyright 2026 Paris-Riana Campbell

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
