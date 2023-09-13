import React, { useEffect, useState, useRef } from "react";
import './WordGame.scss';

const WordGame = () => {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState(null);
  const [definition, setDefinition] = useState(null);
  const [currentInput, setCurrentInput] = useState(Array(words.length).fill(""));
  const [wordGuessed, setWordGuessed] = useState(false);
  const [displayGame, setDisplayGame] = useState(false);

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

  const inputRefs = useRef(Array(words.length).fill(null));

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
      if (currentInput[index] === word[index].toLowerCase()) {
        newInput[index] = currentInput[index];
      } else {
        newInput[index] = inputValue;
      }
      return newInput;
    });
  };

  const handleWordCheck = () => {
    const allInputsFilled = currentInput.every((input) => /^[a-zA-Z]$/.test(input));
    if (allInputsFilled) {
      const isWordGuessed = currentInput.join("").toLowerCase() === word.toLowerCase();
      setWordGuessed(isWordGuessed);

      setCurrentInput((prevInput) => {
        const clearedInput = [...prevInput];
        currentInput.forEach((input, i) => {
          if (input !== word[i].toLowerCase()) {
            clearedInput[i] = "";
          }
        });
        return clearedInput;
      });
    }
  };

  const showGame = () => {
    setDisplayGame(!displayGame)
  }


  return (
    <>
      <div className="word-container">
        <div className={displayGame ? 'game-toggle' : 'game-toggle opposite'} onClick={() => showGame()}>&#x2963;</div>
        <div className={displayGame ? 'game-title-container hidden' : 'game-title-container'}>
          <div className={displayGame ? 'game-title hidden' : 'game-title'}>can you guess the word?</div>
        </div>
        <div className="game-container">
          <div className={displayGame ? 'letter-container' : 'letter-container hidden'}>
            {word?.split("").map((letter, index) => (
              <div key={`container${index}`}>
                <input
                  className={`letter-input ${wordGuessed ? 'guessed' : ''}`}
                  key={`input${index}`}
                  maxLength={1}
                  value={currentInput[index]}
                  onKeyDown={(e) => handleNextInput(index, e)}
                  onKeyUp={(e) => handleWordCheck()}
                  ref={(inputRef) => (inputRefs.current[index] = inputRef)}
                />
              </div>
            ))}
          </div>
          <div className={displayGame ? 'definition-container' : 'definition-container hidden'}>
            <div className="definition-title">definition</div>
            <div className="definition-content">{definition?.toLowerCase()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordGame;
