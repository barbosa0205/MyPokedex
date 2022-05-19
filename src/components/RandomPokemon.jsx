import React from 'react'

import styles from '../styles/components/RandomPokemon.module.scss'

import loadingImg from '../assets/loading2.gif'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'

export const RandomPokemon = () => {
  const navigate = useNavigate()
  const [pokemon, setPokemon] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    getRandomPokemon({
      min: 1,
      max: 500,
    })
  }, [])

  const getRandomPokemon = async ({ min, max }) => {
    try {
      setLoading(true)
      const random = Math.floor(Math.random() * (max - min + 1)) + min
      const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + random)
      const pokemonData = await resp.json()
      setPokemon(pokemonData)
      setLoading(false)
    } catch (error) {}
  }

  return (
    <article
      className={styles.container}
      style={{
        background: `${loading ? 'transparent' : 'var(--gray)'}`,
      }}
    >
      <h4>Pokemon Aleatorio</h4>
      <div>
        {loading ? (
          <div className={styles.loadingContainer}>
            <img src={loadingImg} alt='loading' />
          </div>
        ) : (
          <div className={styles.randomPokemon}>
            {pokemon && (
              <>
                <img
                  onClick={() => {
                    navigate('/pokemon/' + pokemon.id)
                  }}
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt=''
                />
                <p>{pokemon.name}</p>
              </>
            )}
          </div>
        )}
      </div>
      <Button
        text='generar otro pokemon'
        style={{
          border: '1px solid var(--shadow)',
        }}
        disable={loading}
        onClick={() => getRandomPokemon({ min: 1, max: 500 })}
      />
    </article>
  )
}
