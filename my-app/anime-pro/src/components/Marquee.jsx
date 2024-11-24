import { motion } from "motion/react"

import React from 'react'
// import { motion } from "motion/react"
// import { motion } from "motion/react"

function Marquee() {
  return (
    <div className='w-full py-20 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl '>



        <div className='text border-t-2 border-b-2 pt-10  border-zinc-300 flex whitespace-nowrap '>

            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk"] font-light uppercase mt-[1vw] mb-[1vw]'>_We are ochi_ </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk"] font-light uppercase mt-[1vw] mb-[1vw]'>_We are ochi_ </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk"] font-light uppercase mt-[1vw] mb-[1vw]'>_We are ochi_ </motion.h1>
            {/* <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className='text-[15vw] leading-none font-["Founders_Grotesk"] font-light uppercase mt-10 -mb-4'>We are ochi </motion.h1> */}

        </div>

    </div>
  )
}
export default Marquee
