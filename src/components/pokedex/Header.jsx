import React from 'react'
import { useDispatch } from 'react-redux'
import { setNameTrainer } from '../../store/slices/nameTrainer.slice'

function Header() {
  const dispatch = useDispatch()
  const handleClickLogOut = () =>{
    
    dispatch(setNameTrainer(""))
  }
  return (
    <section className='relative'>
     <div className='md:h-20 h-14 bg-red-600 grid items-end'>
      <div className='max-w-[200px] sm:max-w-[300px] ml-[5%]'>
          <img src="/images/pokedex.png" alt="" />
        </div>
     </div>
        
     <div className='md:h-14 h-8 bg-black'></div>

     <div className="md:h-[117px] h-[70px] aspect-square rounded-full bg-white border-[10px] border-black absolute -bottom-4 md:-bottom-7 right-0 -translate-x-1/2 after:contenet-[''] md:after:h-[63px] after:h-[35px] after:aspect-square after:rounded-full after:bg-[#212121] after:absolute md:after:border-[10px] after:border-[6px] after:border-black after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
     <i onClick={handleClickLogOut} className='bx bx-log-out-circle    absolute text-white text-2xl z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'></i>
     </div>
    </section>
  )
}

export default Header