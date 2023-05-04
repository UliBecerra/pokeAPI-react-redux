import React from 'react'

function Footer() {
  return (
    <section className='relative'>
     <div className='md:h-20 h-16 bg-red-600 '></div>

     <div className='md:h-14 h-10 bg-black'></div>

     <div className="md:h-[117px] h-[80px] aspect-square rounded-full bg-white border-[10px] border-black absolute  bottom-0 left-1/2 -translate-x-1/2 after:contenet-[''] md:after:h-[63px] after:h-[40px] after:aspect-square after:rounded-full after:bg-[#212121] after:absolute md:after:border-[10px] after:border-[6px] after:border-black after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"></div>
    </section>
  )
}

export default Footer
