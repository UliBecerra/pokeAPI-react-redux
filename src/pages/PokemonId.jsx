import React, { useEffect, useState } from 'react'
import Header from '../components/pokedex/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import colors from '../resources/colors'
function PokemonId() {
   
  const [pokemon, setpokemon] = useState();
  const {id} = useParams()

  const getPercentageBar = (stat_base) => {
    const percentBarProgress = (stat_base * 100 )/255
    return `${percentBarProgress}%`
  }
  const types = pokemon?.types.slice(0,2).map(type => type.type.name).join(" / ")
  useEffect(() => {
    console.log(pokemon?.types[0].type.name)
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`

    axios.get(URL)
    .then((res) => setpokemon(res.data))
    .catch((err) => console.log(err))
  },[])
  return (
    <section className='bg-[#E5E5E5]'>
      <Header/>
<section className='p-2'>

<article className='bg-white grid  max-w-[900px]  sm:mx-auto font-roboto text-[#302F2F] mt-20 sm:mt-36 border-8 border-white shadow-[0_2px_16px_0px_rgba(0,0,0,0.15)] rounded-[4px] gap-10 '>
        {/* Seccion superior */}
        <section className={` rounded-t-[4px] relative w-[100%]  ${colors().bgByType[pokemon?.types[0].type.name]} sm:h-[185px] h-[110px]  `}>
        <div className='mx-auto absolute max-w-[340px]  left-1/2 -translate-x-1/2 -top-12 slg:-top-16  sm:-top-36'>
          <img className='w-[200px] sm:w-auto' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </div>
        </section>

        {/* Informacion general */}

        <section className='text-center px-10 md:px-20'>
        
          <div>
          <h3 className={` inline rounded-sm font-[500] sm:text-[40px] text-[28px] px-3 border-[1px]  ${colors().colorsTextByType[pokemon?.types[0].type.name]} m-auto`}>#{id} </h3>
          </div>
        
        <div className='grid grid-cols-[1fr_auto_1fr] items-center gap-2'>
          <hr className='border-[#9F9F9F]'/>
          <h2 className={`capitalize font-[500] text-[38px] sm:text-[45px] ${colors().colorsTextByType[pokemon?.types[0].type.name]}`}>{pokemon?.name}</h2>
          <hr className='border-[#9F9F9F]'/>
        </div>

        <div className='flex justify-center gap-6
        text-center text-[#0F0F2D] '>
          <div>
            <h5 className='font-normal  text-[14px] sm:text-[16px]'>Weight</h5>
            <span className='font-[500] text-[20px] sm:text-[25px]'>{pokemon?.weight}</span>
          </div>
            <div>
            <h5 className='font-normal text-[14px] sm:text-[16px]'>Height</h5>
            <span className='font-[500] text-[20px] sm:text-[25px]'>{pokemon?.height}</span>
            </div>
          
        </div>

        <section className='text-center grid sm:grid-cols-2 gap-5'>
          {/* Tipos */}
          <section>
            <h3 className=' font-[500] text-[25px] sm:text-[30px] '>Type</h3>
         
          <section className='grid grid-cols-[auto_auto] justify-center gap-2'>
            {pokemon?.types.map((type) => (
              <article className={`${colors().colorsBgByType[type.type
                .name]} text-white capitalize font-[500] text-[18px] sm:text-[25px] w-[100px] sm:w-[160px] `} key={type}>{type.type.name}</article>
            ))}
          </section>
          </section>
          
          
          

          {/* Habilidades */}
          <section>
          
          <h3 className='font-[500] text-[25px] sm:text-[30px] '>Abilities</h3>
         
         <section className='grid grid-cols-[auto_auto] gap-2 '>
           {pokemon?.abilities.map((ability) => (
             <article className={` border-[1px] text-black capitalize  font-[500] text-[18px] sm:text-[25px] `} key={ability}>{ability.ability.name}</article>
           ))}
         
          </section>
        
        </section> 
        </section>

        </section>


        {/* Stats */}
        <section className='px-10 pb-10 md:px-20'>
          <section className='grid grid-cols-[auto_1fr_auto] items-center'>
          <h3 className='font-[500] text-[32px] sm:text-[45px]'>Stats</h3>
          <hr />
          <div className=' max-w-[60px] sm:max-w-[89px]'>
          <img src="/images/pokeBallId.png" alt="" />
          </div>
          </section>
          <section>
            {
              pokemon?.stats.map((stat) => (
                <article key={stat.stat.name}>
                  <section className='flex justify-between'>
                  <h5 className='capitalize font-semibold text-[18px] sm:text-[24px] '>{stat.stat.name}</h5>

                  <span className='font-semibold text-[16px] sm:text-[20px]'>{stat.base_stat}/255</span>
                </section>
                <div className='h-6 bg-[#F6F6F6] rounded-md'>
                  <div style={{"width": getPercentageBar(stat.base_stat)}} className='h-full w-1/2 bg-gradient-to-r from-[#FCD676] to-[#E6901E] rounded-md'></div>
                </div>
                </article>
              ))
            }
          </section>
        </section>
      </article>

            <article className='bg-white  max-w-[900px]  sm:mx-auto font-roboto text-[#302F2F] mt-10 mb-20 border-8 border-white shadow-[0_2px_16px_0px_rgba(0,0,0,0.15)] rounded-[4px] p-8 '>
              <section className='grid grid-cols-[auto_1fr_auto] items-center mb-10'>
          <h3 className='font-[500] text-[32px] sm:text-[45px]'>Moves</h3>
          <hr />
          <div className=' max-w-[60px] sm:max-w-[89px]'>
          <img src="/images/pokeBallId.png" alt="" />
          </div>
            </section>
              <ul className='flex flex-wrap gap-5'>
                {
                  pokemon?.moves.map((move) => (<li className='bg-[#E5E5E5] p-2 sm:p-4 px-4 sm:px-5 rounded-[50px] text-[18px] sm:text-[24px] capitalize font-normal'>{move.move.name}</li>))
                }
              </ul>
            </article>
</section>
      
    </section>
  )
}

export default PokemonId