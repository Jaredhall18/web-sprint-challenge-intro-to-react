import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import Characters from './components/Characters'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  //Bulk Character list from API
  const [characters, setCharacters] = useState([]);
//This will be for individual character info
  const [character, setCharacter] = useState(null);

 //I may need to create open and closeDetails here

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`).then(res => {
      setCharacters(res.data);
      console.log(res.data);
    }).catch(err => console.error(err));
  }, [])


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters characters={characters}/>
    </div>
  );
}

export default App;
