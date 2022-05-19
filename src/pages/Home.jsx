import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { RandomPokemon } from '../components/RandomPokemon'

import styles from '../styles/pages/Home.module.scss'

export const Home = () => {
  const navigate = useNavigate()
  useEffect(() => {
    //si no hay usuario logeado redirige a la pantalla de bienvenida
    if (!localStorage.getItem('pokeUsername')) {
      navigate('/welcome')
    }
  }, [])

  return (
    <main className={styles.mainContainer}>
      <h1>Bienvenido a mi POKEDEX</h1>
      <RandomPokemon />
      <Button
        text={'Conoce todos los pokemon'}
        className={styles.buttonAllPoke}
        onClick={() => navigate('/all-pokemons')}
      />
    </main>
  )
}
