import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

const CharacterInfo = styled.div`
    display:block;
    background: rgba(255, 189, 114, .5);
    padding:20px;
    width: 25%;
    /* opacity: 50%; */
    margin:10px;

    h2, h3 {
        color: black;
    }
`

const CharacterContainer = styled.div`
display:flex;
justify-content:center;
flex-wrap: wrap;
`

const Character = (props) => {
    const {characters} = props;

    return (
        <div>
             {characters.map((res, index) => {
                 return(
                     <CharacterContainer key = {index}>
                        <CharacterInfo className= 'slidein'>
                            <h2>{res.name}</h2>
                            <h3>Gender: {res.gender}</h3>
                            <h3>Height: {res.height}</h3>
                        </CharacterInfo>
                        
                     </CharacterContainer>
                 )
             })}
        </div>
       
    )
}

export default Character