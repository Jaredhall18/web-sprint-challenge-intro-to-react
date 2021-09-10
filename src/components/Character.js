import React, {useState, useEffect} from 'react';


const Character = (props) => {
    const {characters} = props;

    return (
        <div>
             {characters.map((res, index) => {
                 return(
                     <div key = {index}>
                        <h1>{res.name}</h1>
                        <h2>{res.gender}</h2>
                        <h2>{res.homeworld}</h2>
                     </div>
                 )
             })}
        </div>
       
    )
}

export default Character