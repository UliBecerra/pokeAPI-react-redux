import React, { useEffect, useState } from "react";
import Header from "../components/pokedex/Header";
import { useSelector } from "react-redux";
import axios from "axios";
import PokemonCard from "../components/pokedex/PokemonCard";
import colors from "../resources/colors";

function Pokedex() {
  const nameTrainer = useSelector((store) => store.nameTrainer);
  const [pokemons, setPokemons] = useState([]);
  const [namePokemon, setNamePokemon] = useState("");
  const [types, setTypes] = useState([]);
  const [currentType, setcurrentType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const {colorsTextByType} = colors()
  const handleSubmit = (e) => {
    e.preventDefault();
    setNamePokemon(e.target.pokemonName.value);
    console.log(namePokemon);
  };

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(namePokemon.toLowerCase())
  );

  const paginationLogic = () => {
    const POKEMONS_PER_PAGE = 20

    const sliceStart = (currentPage -1) * POKEMONS_PER_PAGE
    const sliceEnd = sliceStart + POKEMONS_PER_PAGE

    const pokemonsInPage = pokemonsByName.slice(sliceStart, sliceEnd)

    const lastPage = Math.ceil(pokemonsByName.length / POKEMONS_PER_PAGE) || 1

    const PAGES_PER_BLOCK = 7

    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)

    const pagesInBlock = []

    const minPage = (actualBlock -1) * PAGES_PER_BLOCK + 1

    const maxPage = actualBlock * PAGES_PER_BLOCK

    for (let i = minPage ; i <= maxPage; i++) {
     if(i <= lastPage){
      pagesInBlock.push(i)
     }
      
    }

    return {pokemonsInPage, lastPage, pagesInBlock}
  }

  const {pokemonsInPage, lastPage, pagesInBlock} = paginationLogic()
  console.log(pagesInBlock)

  const handleClickPrevius = () =>{
    if(currentPage >1){
      setCurrentPage((currentPage) => currentPage-1)
    }else{
      setCurrentPage(1)
    }
  }

  const handleClickNext = () =>{
    setCurrentPage((currentPage) => currentPage+1)
  }

  useEffect(() => {
    if (!currentType) {
      const URL = "https://pokeapi.co/api/v2/pokemon?limit=1281";

    axios
      .get(URL)
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.log(err));
    }
  }, [currentType]);

  useEffect(() => {
    const URL = "https://pokeapi.co/api/v2/type/";

    axios
      .get(URL)
      .then((res) => {
        const typesPokemons = res.data.results.map((type) => type.name);
        setTypes(typesPokemons);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (currentType) {
      const URL = `https://pokeapi.co/api/v2/type/${currentType}/`;

      axios
        .get(URL)
        .then((res) => {
          const pokemonsByType = res.data.pokemon.map((pokemon) => pokemon.pokemon);
          setPokemons(pokemonsByType) ;
        })
        .catch((err) => console.log(err));
    }
  }, [currentType]);

  useEffect(()=>{
    setCurrentPage(1)
  },[namePokemon, currentType])
  return (
    <section className="bg-[#E5E5E5] min-h-screen">
      <Header />

      
      <section className="sm:py-5 pt-5 pb-3 text-[20px] md:text-[24px] font-normal font-inter max-w-[1150px] m-auto px-2 ">
        <div>
          <h3>
            <span className="text-[#FE1936] font-[700]">
              Welcome {nameTrainer},
            </span>{" "}
            here you can find your favorite pokemon
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex  flex-wrap gap-4 sm:py-10 py-2 sm:flex-nowrap justify-between ">
          <div className="h-[50px] sm:h-[68px] w-full grid grid-cols-[auto_1fr] sm:block mdx:max-w-[640px]">
            <input
            className=" pl-5 h-full min-w-0 shadow-[0_3px_6px_0px_rgba(0,0,0,0.15)] mdx:w-[440px]"
              id="pokemonName"
              type="text"
              placeholder="Seacrh your pokemon"
            />
            <button className="text-[20px] sm:text-[24px] text-white bg-[#D93F3F] h-full px-10 mdx:w-[200px] sm:h-[68px]">Search</button>
          </div>

          <select
            onChange={(e) => setcurrentType(e.target.value)}
            className=" capitalize bg-[#FFFFFF] shadow-[0_3px_6px_0px_rgba(0,0,0,0.15)] px-5 mdx:w-[440px] h-[40px] mt-8 sm:mt-0  sm:h-[68px]"
          >
            <option className=" h-full font-inter font-medium" value="">
              All pokemons
            </option>
            {types.map((type) => (
              <option className={`${colorsTextByType[type]} capitalize font-inter font-medium`} value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
        </form>
      </section>
      {/* Lista de Pokemons */}
      <section className="capitalize max-w-[1150px] px-2 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] first-letter: place-content-center m-auto ">
        {pokemonsInPage.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemonURL={pokemon.url} />
        ))}
      </section>

      <ul className="flex gap-2  justify-center flex-wrap py-10">
      <li onClick={() => setCurrentPage(1)} className={`cursor-pointer ${currentPage<8 && 'hidden'} w-[40px] sm:w-[97px] aspect-square text-[24px] sm:text-[32px] bg-[#DD1A1A] text-[#FBFBFB] flex  items-center justify-center rounded-md`}>{'<<'}</li>
        <li onClick={handleClickPrevius} className={`cursor-pointer ${currentPage<2 && 'hidden'} w-[40px] sm:w-[97px] aspect-square text-[24px] sm:text-[32px] bg-[#DD1A1A] text-[#FBFBFB] flex  items-center justify-center rounded-md`}>{'<'}</li>
        {
          pagesInBlock.map((page) => <li onClick={() => setCurrentPage(page)} className={` w-[40px] sm:w-[97px] aspect-square text-[24px] sm:text-[32px] cursor-pointer ${page === currentPage  && 'bg-[#DD1A1A] text-[#FBFBFB] font-bold'} flex  items-center justify-center rounded-md`} key={page}>{page}</li>)
        }
        <li onClick={handleClickNext} className={`cursor-pointer ${currentPage===lastPage && 'hidden'} w-[40px] sm:w-[97px] aspect-square text-[24px] sm:text-[32px] bg-[#DD1A1A] text-[#FBFBFB] flex  items-center justify-center rounded-md`}>{'>'}</li>
        <li onClick={() => {setCurrentPage(lastPage)}} className={`cursor-pointer ${currentPage===lastPage && 'hidden'} w-[40px] sm:w-[97px] aspect-square text-[24px] sm:text-[32px] bg-[#DD1A1A] text-[#FBFBFB] flex  items-center justify-center rounded-md cursor-pointer`}>{'>>'}</li>
      </ul>
    </section>
  );
}

export default Pokedex;
