import Card from "./components/Card";
import "./App.css";
import { useState } from "react";

const cardTheme = {
  sweets: "/UI Images/desert card.jpg",
  dinner: "/UI Images/dinner card.jpg",
  groceries: "/UI Images/grocery list card.jpg"
};

const decks = {
  dinner: [
    { name: "bento", img: "./Food/dinner/bento.jpg" },
    { name: "chicken sandwich", img: "./Food/dinner/chicken sandwich.jpg" },
    { name: "hot dog", img: "./Food/dinner/hot dog.jpg" },
    { name: "lobster", img: "./Food/dinner/lobster.jpg" },
    { name: "pizza", img: "./Food/dinner/pizza.jpg" },
    { name: "ramen", img: "./Food/dinner/ramen.jpg" },
    { name: "salmon", img: "./Food/dinner/salmon.jpg" },
    { name: "steak", img: "./Food/dinner/steak.jpg" },
    { name: "sushi", img: "./Food/dinner/sushi.jpg" },
    { name: "tacos", img: "./Food/dinner/tacos.jpg" },
    { name: "tofu", img: "./Food/dinner/tofu.jpg" },
    { name: "tomato soup", img: "./Food/dinner/tomatoe soup.jpg" },
    { name: "turkey sub", img: "./Food/dinner/turkey sub.jpg" }
  ],

  sweets: [
    { name: "apple pie", img: "./Food/sweets/apple pie.jpg" },
    { name: "banana split sundae", img: "./Food/sweets/banna split sundae.jpg" },
    { name: "cheesecake", img: "./Food/sweets/cheesecake.jpg" },
    { name: "cinnamon roll", img: "./Food/sweets/cinnamon roll.jpg" },
    { name: "crepes", img: "./Food/sweets/crepes.jpg" },
    { name: "donut", img: "./Food/sweets/donut.jpg" },
    { name: "flan", img: "./Food/sweets/flan.jpg" },
    { name: "macarons", img: "./Food/sweets/macarons.jpg" },
    { name: "strawberry shortcake", img: "./Food/sweets/strawberry short cake.jpg" }
  ]
};

function shuffleArray(array) {

  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] = [copy[j], copy[i]];

  }

  return copy;

}

function App() {

  const [theme, setTheme] = useState("sweets");

  const [shuffledDeck, setShuffledDeck] = useState(
    shuffleArray(decks.sweets)
  );

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const [isFlipped, setIsFlipped] = useState(false);

  const [guess, setGuess] = useState("");

  const [feedback, setFeedback] = useState("");

  const [currentStreak, setCurrentStreak] = useState(0);

  const [longestStreak, setLongestStreak] = useState(0);

  const currentDeck = shuffledDeck;

  const currentCard = currentDeck[currentCardIndex];



  function changeTheme(newTheme) {

    setTheme(newTheme);

    setShuffledDeck(shuffleArray(decks[newTheme]));

    setCurrentCardIndex(0);

    setIsFlipped(false);

    setGuess("");

    setFeedback("");

  }



  function nextCard() {

    setIsFlipped(false);

    setGuess("");

    setFeedback("");

    setCurrentCardIndex((previousIndex) => previousIndex + 1);

  }



  function previousCard() {

    setIsFlipped(false);

    setGuess("");

    setFeedback("");

    setCurrentCardIndex((previousIndex) => previousIndex - 1);

  }



  function shuffleDeck() {

    const shuffled = shuffleArray(currentDeck);

    setShuffledDeck(shuffled);

    setCurrentCardIndex(0);

    setIsFlipped(false);

    setGuess("");

    setFeedback("");

  }



  function checkAnswer() {

    const userAnswer = guess

      .toLowerCase()

      .trim();



    const correctAnswer = currentCard.name

      .toLowerCase()

      .trim();



    if (userAnswer === correctAnswer) {

      setFeedback("✅ Correct!");



      const newStreak = currentStreak + 1;



      setCurrentStreak(newStreak);



      if (newStreak > longestStreak) {

        setLongestStreak(newStreak);

      }

    }

    else {

      setFeedback("❌ Incorrect");

      setCurrentStreak(0);

    }

  }



  return (

    <div>

      <div className="header">

        <img

          className="decor-left"

          src="Food/sweets/strawberry tart.jpg"

          alt="decorative"

        />



        <h1>Blurred Food Guessing Game</h1>



        <img

          className="decor-right"

          src="Food/dinner/turkey.jpg"

          alt="decorative"

        />

      </div>



      <h3>

        Categories:



        <button onClick={() => changeTheme("sweets")}>

          sweets

        </button>



        <button onClick={() => changeTheme("dinner")}>

          dinner

        </button>

      </h3>



      <Card

        cardBackground={cardTheme[theme]}

        card={currentCard}

        isFlipped={isFlipped}

        setIsFlipped={setIsFlipped}

      />



      <div>

        <input

          type="text"

          placeholder="Enter your guess"

          value={guess}

          onChange={(event) =>

            setGuess(event.target.value)

          }

        />



        <button onClick={checkAnswer}>

          Submit

        </button>



        <h3>{feedback}</h3>



        <h3>

          Current Streak: {currentStreak}

        </h3>



        <h3>

          Longest Streak: {longestStreak}

        </h3>

      </div>



      <h3>

        Card {currentCardIndex + 1}

        {" / "}

        {currentDeck.length}

      </h3>



      <h3>

        {currentDeck.length} cards in this category

      </h3>



      <h3>

        <button

          disabled={currentCardIndex === 0}

          onClick={previousCard}

        >

          ←

        </button>



        <button onClick={shuffleDeck}>

          🔀 Shuffle

        </button>



        <button

          disabled={

            currentCardIndex === currentDeck.length - 1

          }

          onClick={nextCard}

        >

          →

        </button>

      </h3>

    </div>

  );

}

export default App;