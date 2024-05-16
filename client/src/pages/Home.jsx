import React from 'react'
import Counter from '../components/Counter'

const Home = () => {

  return (
    <div className='w-[1024px] h-full flex flex-row justify-center items-center'>
        <h1 className='font-bold text-[20px] mb-4'>Este es el primer componente para el proyecto del curso:</h1>
        <div className='flex'>
            <Counter/>
        </div>
    </div>
  )
}

export default Home