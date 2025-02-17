import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-32'>

        <div className='cardcontainer w-1/2 h-[50vh]'>
        <div className='card rounded-xl  w-full h-full bg-[#004d43]'>
            <img className='w-32' src=' ' alt=''></img>
        </div>
         </div>


         <div className='cardcontainer flex gap-10 w-1/2 h-[50vh]'>
        <div className='card rounded-xl w-full h-full bg-[#222d2d]'></div>
        <div className='card rounded-xl w-full h-full bg-[#222d2d]'></div>

         </div>
      


    </div>
  )
}

export default Cards
