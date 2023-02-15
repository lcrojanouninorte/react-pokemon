import { useState } from 'react'
import PokemonList from './components/PokemonList/PokemonList'

import PokemonCards from './components/PokemonCards/PokemonCards'
import s from './styles.module.css'

function App() {
  return (
    <div>
      <PokemonList
      />
      <PokemonCards
      />

    </div>
  )
}

export default App
