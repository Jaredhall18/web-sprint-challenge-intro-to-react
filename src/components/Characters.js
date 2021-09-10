import React, {useState, useEffect} from 'react'

const Characters = (props) => {
    const {characters} = props
    
    return (
        <h2> Hello {characters.name}</h2>
    )

}

export default Characters