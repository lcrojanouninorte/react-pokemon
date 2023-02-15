import React, { useState } from 'react'
import s from "./style.module.css";
 
const PokemonItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  const onPokemonItemClick = ()=> {
    props.onClick(props.pokemon);
  }
  const activate = () => {
    setIsHover(true);
  };

  const deactivate = () => {
    setIsHover(false);
  };
  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff";
    } else {
      if (props.isSelected) {
        return "#26baea";
      } else {
        return "#eff0ef";
      }
    }
  };
  return (
    <div
    onMouseEnter={activate}
    onMouseLeave={deactivate}
    onClick={onPokemonItemClick}
    style={{ backgroundColor: getBackgroundColor() }}
    >
      <p>{props.pokemon.national_number} {props.pokemon.name}</p> 
      <img src={props.pokemon.sprites.animated}></img>
    </div>
    
  )
}

export default PokemonItem