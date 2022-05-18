import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { AllPokemons } from '../pages/AllPokemons'
import { Home } from '../pages/Home'
import { Pokemon } from '../pages/Pokemon'
import { PokemonSearched } from '../pages/PokemonSearched'

export const DashboardsRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-pokemons' index element={<AllPokemons />} />
        <Route path='/search/:pokename' index element={<PokemonSearched />} />
        <Route path='/pokemon/:id' element={<Pokemon />} />
      </Routes>
      <Footer />
    </>
  )
}
