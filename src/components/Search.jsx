import React from 'react'
import { Icon } from './Icon'
import styles from '../styles/components/Search.module.scss'
import { useNavigate } from 'react-router-dom'

export const Search = () => {
  const navigate = useNavigate()

  const [search, setSearch] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const fetchPokemon = async (search) => {
    try {
      const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      const pokemonData = await resp.json()
      if (pokemonData.name) {
        setLoading(false)
        setOpen(false)
        navigate(`pokemon/${pokemonData.id}`, {
          replace: true,
        })
        navigate(0)
      }
    } catch (error) {
      setLoading(false)
      setError('No se encontró el pokemon')
      return 'No se encontró el pokemon'
    }
  }

  const validatePokemon = () => {
    setLoading(true)
    if (!search.trim()) {
      setError('Por favor ingrese un nombre de pokemon valido')

      return
    }

    fetchPokemon(search)
  }

  return (
    <>
      <div className={styles.container} onClick={() => setOpen(true)}>
        <Icon className='ri-search-line' />
        <p>Search</p>
      </div>
      {open && (
        <div className={styles.containerSearch} onClick={() => setOpen(false)}>
          <div
            className={styles.search_container}
            onClick={(e) => e.stopPropagation()}
          >
            <label htmlFor='search'>
              <p>Encuentra tu pokemon Favorito</p>
            </label>
            <input
              id='search'
              type={'text'}
              placeholder='Pikachu'
              autoComplete='off'
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  validatePokemon()
                }
              }}
            />
            {loading && <p>CARGANDO...</p>}
            {error && <p className={styles.error}>{error}</p>}
          </div>
        </div>
      )}
    </>
  )
}
