import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import colors from '../../resources/colors'


function PokemonCard({pokemonURL}) {
  const [pokemon, setPokemon] = useState()
  const types = pokemon?.types.slice(0,2).map(type => type.type.name).join(" / ")
  useEffect(()=>{
    
    axios.get(pokemonURL)
    .then((res) => setPokemon(res.data))
    .catch((err) => console.log(err))
  }, [])
  return (
    <Link to={`/pokedex/${pokemon?.id}`} className={` ${colors().bgBordersByType[pokemon?.types[0].type.name]} text-center bg-planta p-3 rounded-xl font-roboto `  }  >
      {/* Seccion superior */}
      <section className={`  ${colors().bgByType[pokemon?.types[0].type.name]} relative h-[130px] rounded-t-md`} >
        <div className='absolute -bottom-12 w-[150px] left-1/2 -translate-x-1/2'>
          <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
        </div>
      </section>

      {/* Seccion inferior */}
      <section className='pt-14 bg-white rounded-b-md '>
          <h3 className={`text-[25px] font-[500] ${colors().colorsTextByType[pokemon?.types[0].type.name]}`}>{pokemon?.name}</h3>
          <h4 className='text-[14px] font-[400]'>{types}</h4>
          <p className='text-[10px] text-[#9F9F9F]'>Type</p>
          <hr />

          <section className='grid grid-cols-3 gap-2 p-2 uppercase'>
            {
              pokemon?.stats.map(stat => (
                <div key={stat.stat.name}>
                  <h5 className='text-[10px] text-[#030303]'>{stat.stat.name}</h5>
                  <span className={` ${colors().colorsTextByType[pokemon?.types[0].type.name]} font-inter font-[600] text-[16px] `}>{stat.base_stat}</span>
                </div>
              ))
            }
          </section>

      </section>
    </Link>  
  )
}

export default PokemonCard