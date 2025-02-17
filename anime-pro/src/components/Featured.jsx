import { motion, useAnimate } from 'framer-motion'
import React from 'react'

function Featured() {
 const cards= [useAnimation(),useAnimation()] ;
const handlehover =(index)=>{

  cards[index].start({y:"0"})

}

  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>Featured Project</h1>

       
      </div>




      <div className='py-20 pr-16 pl-16'>
       <div className="cards w-full gap-10 flex mt-10">


   
            <motion.div onHoverStart={()=> handlehover} className="cardcontainer relative w-1/2 h-[60vh] ">
            <h1 className='absolute flex z-[9] left-full -translate-x-1/2 right-0 -translate-y-1/2 top-1/2 text-8xl leading-none font-thin tracking-tighter right'>FYDE</h1>
            {"FYDE".split("").map((item,index)=>(
              <motion.spam initial={{y:"100%"}} animate={cards = [0]} className='inline-block translate-y-full'> {item}</motion.spam>
            ))}
            <div className='overflow-hidden card rounded-xl w-fill h-full bg-green-500'>
            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png' alt=''></img>
            </div>
            </motion.div>

            <div className="cardcontainer relative w-1/2 h-[60vh]  ">
            <h1 className='absolute  z-[9] right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-8xl leading-none font-thin tracking-tighter right'>VISE</h1>
            {"VISE".split("").map((item,index)=>(
              <spam>{item}</spam>
            ))}
            
            <div className='card overflow-hidden rounded-xl w-fill h-full'>
            <img className='w-full h-full bg-cover bg-zinc-300' src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg' alt=''></img>
            </div>
            </div>


        </div></div>



    </div>
  );
}

export default Featured
