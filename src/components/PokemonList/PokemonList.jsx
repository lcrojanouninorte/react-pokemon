import React from 'react'
import { POKEMONS } from '../../shared/pokemons'
import PokemonItem from '../PokemonItem/PokemonItem'

const PokemonList = (props) => {
  return (
    <div>
      <h2>choose your 5 pokemons</h2>
      <ul>

      {
        POKEMONS.map((pokemon, idx)=>(
          <li key={idx}>
           <PokemonItem
            isSelected={props.pokemon === pokemon}
           pokemon={pokemon}
           onClick={props.onPokemonItemClick}
           />
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default PokemonList