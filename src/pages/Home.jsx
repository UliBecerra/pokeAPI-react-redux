import React from 'react'
import Footer from '../components/Footer'
import { setNameTrainer } from '../store/slices/nameTrainer.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setNameTrainer(e.target.nameTrainer.value))
    navigate("/pokedex")
  }
  
  return (
    <section className='min-h-screen grid grid-rows-[1fr_auto] '>
      <section className='grid place-content-center '>
        <article className='flex flex-col items-center gap-10 '>
          <div className='px-5'>
            <img src="/images/pokedex.png" alt="" />
          </div>
          <div className='font-inter'>
          <h2 className=' text-[30px] md:text-[50px] text-[#FE1936] font-[700] text-center '>!Hello trainer!</h2>
          <p className='text-[15px] md:text-[25px] font-[500] text-center'>Give me your name to start!</p>
          </div>
          <form onSubmit={handleSubmit} className='font-roboto md:h-[68px] h-[45px] shadow-lg'>
            <input className='w-[220px] md:w-[450px]  md:text-[25px] text-[20px] px-3 h-[100%] border-[1px] border-black text-center focus:outline-none' id='nameTrainer' type="text" placeholder='Your name...'/>
            <button className='bg-[#D93F3F] md:text-[24px] text-[20px] text-white px-5 md:w-[210px] h-full  hover:text-[#D93F3F] hover:bg-white hover:border-2 hover:border-[#D93F3F] hover:font-bold transition-[100s]'>Start!</button>
          </form>
        </article>
      </section>

      <Footer/>
    </section>
  )
}

export default Home
