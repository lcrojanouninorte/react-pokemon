import React from 'react'

const PokemonCardItem = (props) => {
  return (
    <div  >

{ props.pokemon.name} 
             <img src={props.pokemon.sprites.large}></img>
    </div>
  )
}

export default PokemonCardItem