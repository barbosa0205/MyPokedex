import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { ListContainer } from '../components/ListContainer'

import styles from '../styles/pages/AllPokemons.module.scss'

import laodingImg from '../assets/loading.gif'

export const AllPokemons = () => {
  const navigate = useNavigate()
  const [pokemons, setPokemons] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [prev, setPrev] = React.useState('')
  const [next, setNext] = React.useState('')
  useEffect(() => {
    getPokemons()
    return () => {
      setPokemons([])
      setLoading(false)
      setPrev('')
      setNext('')
    }
  }, [])

  //obtener todos los pokemons
  const getPokemons = async (
    url = 'https://pokeapi.co/api/v2/pokemon?limit=20'
  ) => {
    try {
      setLoading(true)
      const resp = await fetch(url)
      const pokemons = await resp.json()
      //obtenemos los datos completos de cada pokemon mediante una promesa
      const promises = pokemons.results.map(async (pokemon) => {
        const resp = await fetch(pokemon.url)
        const pokemonData = await resp.json()
        return pokemonData
      })
      //esperamos a que todas las promesas se resuelvan
      const data = await Promise.all(promises)

      //guardamos los pokemon en el state
      setPokemons(data)

      //guardamos los datos de la paginacion
      setNext(pokemons.next)
      if (pokemons.previous) {
        setPrev(pokemons.previous)
      } else {
        setPrev('')
      }
      setLoading(false)
      set
    } catch (error) {}
  }

  return (
    <main>
      <ListContainer>
        {loading ? (
          <div className={styles.loading}>
            <img src={laodingImg} alt='loading' />
            <h2>CARGANDO</h2>
          </div>
        ) : (
          <>
            <div className={styles.btnContainer}>
              <Button
                text={'Anterior'}
                disable={!prev}
                onClick={() => {
                  getPokemons(prev)
                }}
              />
              <Button
                text={'Siguiente'}
                disable={!next}
                onClick={() => {
                  getPokemons(next)
                }}
              />
            </div>
            <div className={styles.pokeContainer}>
              {pokemons.map((pokemon, index) => (
                <article
                  key={index}
                  className={styles.pokemonItem}
                  onClick={() => {
                    navigate(`/pokemon/${pokemon.id}`)
                  }}
                >
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                  />
                  <p>{pokemon.name}</p>
                </article>
              ))}
            </div>
            <div className={styles.btnContainer}>
              <Button
                text={'Anterior'}
                disable={!prev}
                onClick={() => {
                  getPokemons(prev)
                }}
              />
              <Button
                text={'Siguiente'}
                disable={!next}
                onClick={() => {
                  getPokemons(next)
                }}
              />
            </div>
          </>
        )}
      </ListContainer>
    </main>
  )
}
