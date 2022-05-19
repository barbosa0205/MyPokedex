import React, { useEffect, useState } from 'react'

import styles from '../styles/pages/Pokemon.module.scss'

import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ListContainer } from '../components/ListContainer'

export const Pokemon = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getPokemonData(id)
    return () => {
      setPokemon(null)
      setLoading(false)
    }
  }, [])

  //obteniendo el pokemon por id
  const getPokemonData = async (id) => {
    try {
      setLoading(true)
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const pokemonData = await resp.json()

      setPokemon(pokemonData)
      setLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  return loading ? (
    <p>Cargando...</p>
  ) : (
    <>
      {pokemon && (
        <main className={styles.container}>
          <header className={styles.pokemonContainer}>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
            />
            <h1>{pokemon.name}</h1>
            <div
              style={{
                width: '100%',
                maxWidth: '25rem',
                display: 'flex',
                justifyContent: 'space-around',
              }}
            >
              <p
                style={{
                  margin: '0 1rem',
                }}
              >
                Peso: {Math.ceil(pokemon.weight * 0.1)} KG
              </p>
              <p
                style={{
                  margin: '0 1rem',
                }}
              >
                Altura: {Math.ceil((pokemon.height * 10 * 1) / 100)} M
              </p>
            </div>
            <p
              style={{
                margin: '.5rem 0',
              }}
            >
              Tipo: {pokemon.types.map((type) => type.type.name).join(', ')}
            </p>
          </header>
          <section className={styles.statsContainer}>
            <h2>Estadísticas</h2>
            <div className={styles.stats}>
              {pokemon.stats.map((stat, index) => (
                <div className={styles.stat} key={index}>
                  <p>{stat.stat.name}</p>
                  <p>{stat.base_stat}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}
    </>
  )
}
