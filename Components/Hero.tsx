import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function Hero() {
    return (
        <div className='maxContainer'>
            <h1 className='text-4xl font-bold text-black mb-16'>Explore the tools <br /> and frameworks behind your webiste</h1>

            <div className="flex justify-center items-center relative ">
                <form className='relative w-full'>
                    <button className="bg-black text-white flex justify-center items-center cursor-pointer absolute right-3 top-2 rounded-full p-4">
                        <FaArrowUp className='' />
                    </button>
                    <input
                        type="text"
                        className='outline-[#e9dede] w-full bg-[#f3eaea] withinForm border-[#e9dede] py-5 px-4 rounded-full'
                        placeholder='Enter your website address or a keyword'
                    />
                </form>
            </div>
        </div>
    )
}
