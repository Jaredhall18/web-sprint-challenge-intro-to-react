import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import { BASE_URL } from './constants';
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  //Bulk Character list from API

//This will be for individual character info
  const [characters, setCharacters] = useState([]);
 //I may need to create open and closeDetails here

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
      axios.get(`${BASE_URL}`)
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => console.error(err))
    }, [])
    console.log('characters array', characters);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters}/>
    </div>
  );
}

export default App;
