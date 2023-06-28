import React, { useState } from 'react';
import './App.css';
import logo from './verba.png';

function App() {
  const [word, setWord] = useState('');
  const [card, setCard] = useState('No Instructions. Intuitive Shit.');

  function handleClick() {
    fetch('https://api.api-ninjas.com/v1/randomword', {
      method: 'GET',
      headers: {
        'X-Api-Key': 'pQGytlh0L+jguR9K2n9xJw==Cwr8x8WiT9KsuwxD',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(result => {
        setWord(result.word);
        setCard('');
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  }

  function handle() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error: ' + response.status);
        }
      })
      .then(data => {
        if (data.length > 0 && data[0].meanings.length > 0 && data[0].meanings[0].definitions.length > 0) {
          setCard(data[0].meanings[0].definitions[0].definition);
        } else {
          setCard('Google it Bitch!');
        }
      })
      .catch(error => {
        console.error('Error: ', error);
        setCard('Google it Bitch!');
      });
  }

  return (
    <div className='outer'>
    <img src={logo} alt="Logo" className="logo" />
    <div className="container">
      <h2>{word}</h2>
      <div className="btn-container">
      <button className="button-generate" onClick={handleClick}>Generate</button>
      <button className="button-meaning" onClick={handle}>Meaning</button>
      </div>
      <div className="card">{card}</div>
    </div>
    </div>
  );
}

export default App;
