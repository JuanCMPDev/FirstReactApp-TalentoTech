import React, { useState } from 'react'
import Counter from '../components/Counter'

const Home = () => {

    const [max, setMax] = useState(100);
    const [min, setMin] = useState(0);

    const handleSetValues = (e) => {
        e.preventDefault();
        console.log('Max:', max);
        console.log('Min:', min);
    }

    return (
        <div className='w-[1024px] h-full mb-24 flex flex-col justify-center items-center'>
            <div className="flex flex-row justify-center items-center mb-8">
                <h1 className='font-bold text-[20px] mb-0 mr-4'>This is the first component of the course:</h1>
                <Counter min={min} max={max}/>
            </div>
            <div className="flex flex-column justify-center items-center">
                <h1 className='font-bold text-[20px] mb-0'>With this form you can change the max and min values for the counter:</h1>
                <form className='flex flex-col gap-3 mt-4 ml-10'>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="max" className='font-bold'>Max:</label>
                        <input type="text" id="max" name="max" className='pl-[3px]' onChange={(e) => setMax(parseInt(e.target.value))} />
                    </div>
                    <div className="flex flex-col gap-1 mb-5">
                        <label htmlFor="min" className='font-bold'>Min:</label>
                        <input type="text" id="min" name="min" className='pl-[3px]' onChange={(e) => setMin(parseInt(e.target.value))} />
                    </div>
                    <div>
                        <button className='p-[6px] border-[1px] border-[#522A27] bg-[#FF8811] rounded-lg text-[#522A27]' onClick={handleSetValues}>set values</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home