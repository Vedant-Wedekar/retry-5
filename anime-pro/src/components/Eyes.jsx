import React, { useEffect ,useRef ,useState } from 'react';

function Eyes() {
   const [rotate, setrotate] = useState(0);



    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mousex = e.clientX;
            let mousey = e.clientY;

            let deltax = mousex - window.innerWidth/2;
            let deltay = mousey - window.innerHeight/2;

          
            var angle =  Math.atan2( deltay,deltax) * (180/Math.PI );

            setrotate(angle-180) ;
        })  
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
    {/* // this locomotive scroll animation  */}

        <div data-scroll  data-scroll-speed='-.7' className=' w-full relative h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'  >
        <div className='absolute flex gap-10   top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%]'>
        <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-green-100 rounded-full '>
        <div className='relative  w-2/3 h-2/3 bg-zinc-900 rounded-full '>
        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}   className='line absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-full h-10 '>
        <div className='w-10 h-10 bg-zinc-100 rounded-full '></div></div>
        </div>

        
            {/* style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} */}


{/* style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} */}

        </div>
        <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-green-100 rounded-full '>
        <div className='relative  w-2/3 h-2/3 bg-zinc-900 rounded-full '>
        <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}}  className=' line absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] w-full h-10 '>
        <div className='w-10 h-10 bg-zinc-100 rounded-full '></div></div>

        </div>  

        </div>

        </div>
        </div>


      
    </div>
  )
}

export default Eyes
