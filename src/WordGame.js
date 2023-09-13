import React, { useEffect, useState, useRef } from "react";
import './WordGame.scss';

const WordGame = () => {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState(null);
  const [definition, setDefinition] = useState(null);
  const [currentInput, setCurrentInput] = useState(Array(words.length).fill(""));
  const [wordGuessed, setWordGuessed] = useState(false);
  const [displayGame, setDisplayGame] = useState(false);
  const inputRefs = useRef(Array(words.length).fill(null));

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word?number=20&length=9')
      .then(response => response.json())
      .then(json => setWords(json))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const fetchWordWithDefinition = async () => {
      words.forEach(async (wordToCheck) => {
        try {
          const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordToCheck}`);
          if (response.status === 200) {
            const json = await response.json();
            if (json.length > 0 && json[0].meanings[0].definitions[0].definition) {
              setWord(wordToCheck);
              setDefinition(json[0].meanings[0].definitions[0].definition);
              setCurrentInput(Array(wordToCheck.length).fill(""));
              return;
            }
          }
        } catch (error) {
          console.error(error);
        }
      });
    };

    fetchWordWithDefinition();
  }, [words]);


  const handleNextInput = (index, e) => {
    if (/^[a-zA-Z]$/.test(e.key) && e.key !== e.target.value) {
      e.target.value = e.key;
    }
    if (e.key === "Backspace") {
      e.target.value = "";
      if (index > 0) {
        e.target.blur();
        inputRefs.current[index - 1].focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.target.blur();
      inputRefs.current[index - 1].focus();
    } else if (index < inputRefs.current.length - 1 && !(e.key === "Backspace" || e.key === "ArrowLeft")) {
      e.target.blur();
      inputRefs.current[index + 1].focus();
    }

    const inputValue = e.target.value.toLowerCase();
    setCurrentInput((prevInput) => {
      const newInput = [...prevInput];
      newInput[index] = currentInput[index] === word[index].toLowerCase() ? currentInput[index] : inputValue;
      return newInput;
    });
  };

  const handleWordCheck = () => {
    const allInputsFilled = currentInput.every((input) => /^[a-zA-Z]$/.test(input));
    if (allInputsFilled) {
      const isWordGuessed = currentInput.join("").toLowerCase() === word.toLowerCase();
      setWordGuessed(isWordGuessed);

      setCurrentInput((prevInput) => {
        const clearedInput = prevInput.map((input, i) => (input !== word[i].toLowerCase() ? "" : input));
        return clearedInput;
      });
    }
  };

  const showGame = () => {
    setDisplayGame(!displayGame);
  };

  return (
    <div className="word-container">
      <div className={`game-toggle ${displayGame ? "" : "opposite"}`} onClick={showGame}>
        &#x2963;
      </div>
      <div className="game-title-container">
        <div className={`game-title ${!displayGame ? "" : "hidden"}`}>can you guess the word?</div>
      </div>
      <div className="game-container">
        <div className={`letter-container ${displayGame ? "" : "hidden"}`}>
          {word &&
            word.split("").map((letter, index) => (
              <div key={`container${index}`}>
                <input
                  className={`letter-input ${wordGuessed ? "guessed" : ""}`}
                  maxLength={1}
                  value={currentInput[index]}
                  onKeyDown={(e) => handleNextInput(index, e)}
                  onKeyUp={handleWordCheck}
                  ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                />
              </div>
            ))}
        </div>
        <div className={`definition-container ${displayGame ? "" : "hidden"}`}>
          <div className="definition-title">definition</div>
          <div className="definition-content">{definition?.toLowerCase()}</div>
        </div>
      </div>
    </div>
  );
};

export default WordGame;
