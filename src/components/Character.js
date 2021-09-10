import React, {useState, useEffect} from 'react';


const Character = (props) => {
    const {name, birth, homeworld} = props
    console.log(props)
    return (
       <div>
           <h1>{name}</h1>
            <h3>{birth}</h3>
            <h3>{homeworld}</h3>
       </div> 
        
    );
}

export default Character