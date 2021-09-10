import React, {useState, useEffect} from 'react';
import Character from './Character';

const Characters = (props) => {
    const {characters} = props

    return (
        <div>
             {characters.map(character => {
                return <Character 
                // key= {character.id} 
                name = {character.name} 
                height = {character.height} 
                mass = {character.mass} 
                hair={character.hair} 
                eyes={character.eyes} 
                gender={character.gender} 
                homeworld={character.homeworld} />
             })}
        </div>
       
    );
}

export default Characters