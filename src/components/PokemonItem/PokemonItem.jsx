import React from 'react'
const PokemonItem = (props) => {
  const onPokemonItemClick = ()=> {
    props.onClick(props.pokemon);
  }
  return (
    <div
    onClick={onPokemonItemClick}
    ><p>{props.pokemon.name}</p> <img src={props.pokemon.sprites.animated}></img></div>
    
  )
}

export default PokemonItem