import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center gap-5 px-32'>
        <div className='cordcontainer h-[50vh] w-1/2'>
            <div className='card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]'>
                <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019</button>
            </div>
        </div>
        <div className='cordcontainer flex gap-5 h-[50vh] w-1/2'>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019</button>
            </div>
            <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2019</button>
            </div>
        </div>
    </div>
  )
}

export default Cards