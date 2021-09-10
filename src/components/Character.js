import React, {useState, useEffect} from 'react';


const Character = (props) => {
    const {Character} = props
    console.log(props)
    return (
       <div>
           <h1>{props.name}</h1>
            <h3>{props.birth}</h3>
            <h3>{props.homeworld}</h3>
       </div> 
        
    );
}

export default Character