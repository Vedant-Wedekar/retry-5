import { motion } from 'framer-motion';
import React from 'react'
// import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    // this locomotive scroll animation 

    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-1000px bg-zinc-900 pt-1 '>
      <div className='textstructure mt-60 px-20'> 

        <div className='masker'></div>
        <h1 className='tracking-tighter  leading-[6.2vw] uppercase text-[7vw] font-[Founders_Grotesk]font-semibold'>We Create</h1>

<div className='flex'>

   
{/* this is the use of loco motive js // want to install jst watch ochi-wejo 2.3 */}
  <motion.div
   initial={{width:0}}
    animate={{width:"10vw"}}
     transition={{ease:[0.76, 0, 0.24, 1] , duration:2}}
       className='w-[10vw] h-[4.8vw] mt-8 relative -top-[1vw] bg-red-500'></motion.div>
        <div className='masker'></div>
        <h1 className='tracking-tighter  leading-[6.2vw] uppercase text-[7vw] font-[Founders_Grotesk]font-semibold'>Eye Opening</h1>
</div>

        <div className='masker'></div>
        <h1 className='tracking-tighter  leading-[4vw] uppercase text-[7vw] font-[Founders_Grotesk]font-semibold'>Presentation</h1>
      </div>
      {/* {[index=== 1 &&(<div className='w-[9vw] h-[5vh] bg-red-500'></div>)]} */}

<div className='border-t-2 mt-28 border-zinc-600 flex justify-between items-center py-5 px-20'>

{/* <div className='flex justify-between items-center'>  */}
{["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
    <p className='text-md font-light tracking-tight leading-none'>{item}</p>
))}

<div className='start flex justify-center items-center gap-5 '> 
    <div className='px-5 py-2 border-[1px]  border-zinc-500 rounded-full text-light font-md uppercase'>Start the Project</div>
    <div className='w-10 h-10 rounded-full border-[1px] flex  border-zinc-500'>
        <spam className='rotate-45'>
            {/* <FaArrowUpLong className='ml-2.5 mt-2'></FaArrowUpLong> */}
            </spam>
        
        </div>
</div>

</div>
    </div>
  );
}

export default LandingPage
