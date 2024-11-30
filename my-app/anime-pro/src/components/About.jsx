import React from 'react'

function About() {
  return (
    // this locomotive scroll animation 
    <div data-scroll 
    data-scroll-section
    // data-scroll-speed='.7'
      className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black '>

        <h1 className='font-["Neue_Montreal"] text-6xl leading-[3.5vw] '>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
      <div className='w-full flex gap-5 border-t-[1px]  border-[#a1b562] mt-20 pt-10'>

        <div className='w-1/2 '>
        <h1 className='text-7xl'>OUR APPROACH</h1>
        <button className='flex items-center gap-5 px-20 py-6 rounded-full bg-zinc-900 text-white mt-10'>    Read More
            <div className='w-3 h-3  bg-zinc-100 rounded-full'></div>
             </button>
        </div>

        <div className='w-1/2 h-[60vh] bg-[#b6bd9d] rounded-3xl '></div>


      </div>
    </div>
  )
}

export default About
