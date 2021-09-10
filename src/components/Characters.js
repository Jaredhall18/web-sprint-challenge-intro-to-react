import React, {useState, useEffect} from 'react';
import Character from './Character';

const Characters = (props) => {
    const {characters} = props

    return (
        <div>
             {characters.map(characters, index => {
                return <Character 
                key= {index} 
                name = {characters.name} 
                // height = {characters.height} 
                // mass = {characters.mass} 
                // hair={characters.hair} 
                // eyes={characters.eyes} 
                // gender={characters.gender} 
                homeworld={characters.homeworld} />
             })}
        </div>
       
    );
}

export default Characters