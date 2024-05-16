import React, { useEffect, useState } from 'react'

const Counter = ({min, max}) => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count < min) {
            setCount(min);
        } else if (count > max) {
            setCount(max);
        }
    }, [min, max]);

    const handleClick = (operation) => {
        if(operation === 'increment'){
            count < max && setCount(count + 1);
        } else if (operation === 'reset'){
            setCount(min);
        } else if (operation === 'decrement'){
            count > min && setCount(count - 1);
        } else {
            return alert("la operacion no esta contemplada")
        };
    }

  return (
    <div className='w-full h-full flex justify-center items-center'>
        <div className='flex flex-col items-center justify-center my-16 bg-[#F4D06F] w-80 h-48 rounded-lg shadow-md'>
            <h1 className='font-extrabold text-[25px]'>Counter with React</h1>
            <h2 className='text-[40px] font-semibold my-5'>{count}</h2>
            <div className='flex gap-5'>
                <button className='p-[6px] border-[1px] border-[#522A27] bg-[#FF8811] rounded-lg text-[#522A27]' onClick={()=>handleClick('increment')}>Increment</button>
                <button className='p-[6px] border-[1px] border-[#522A27] bg-[#FF8811] rounded-lg text-[#522A27]' onClick={()=>handleClick('reset')}>Reset</button>
                <button className='p-[6px] border-[1px] border-[#522A27] bg-[#FF8811] rounded-lg text-[#522A27]' onClick={()=>handleClick('decrement')}>Decrement</button>
            </div>
        </div>
    </div>
  )
}

export default Counter