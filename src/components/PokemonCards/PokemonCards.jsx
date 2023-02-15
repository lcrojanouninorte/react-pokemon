import React from 'react'
import PokemonCardItem from '../PokemonCardItem/PokemonCardItem'
const PokemonCards = (props) => {
  return (
    <div>
    
        <ul>
        {
          props.selectedPokemons ?  
          props.selectedPokemons.map((pokemon, idx)=>(
            <li  key={idx}>
             < PokemonCardItem
             
              pokemon={pokemon}
             />
             
           
            </li>
          ))
          : "No pokemons selected"
        }
          </ul> 
    </div>
   
  
  )
}

export default PokemonCards