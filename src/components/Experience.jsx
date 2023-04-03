import React from 'react'
import { FaCss3, FaReact, FaPython, FaJava } from 'react-icons/fa'
import { SiTailwindcss, SiPhp } from "react-icons/si";

const Experience = () => {
    return (
        <div name="experience" className="h-fit md:h-screen w-full bg-white">
            <div className='hide p-7 md:w-[600px] mx-auto flex flex-col justify-center h-full' >
                <div className='hide'>
                    <h1 className='text-primary text-3xl border-b-4 border-purple max-w-fit'>Experience</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 py-10 gap-6' >
                        <div className='bg-gray-700 border border-gray-400/20 rounded-xl shadow-lg p-2 hover:scale-105 duration-500'>
                            <i><FaCss3 className='mx-auto w-20 h-20' /></i>
                            <p className='pt-2 text-center'>CSS</p>
                        </div>
                        <div className='bg-gray-700 border border-gray-400/20 rounded-xl shadow-lg p-2 hover:scale-105 duration-500'>
                            <i><FaReact className='mx-auto w-20 h-20 text-[#61dafb]' /></i>
                            <p className='pt-2 text-center'>React</p>
                        </div>
                        <div className='bg-gray-700 border border-gray-400/20 rounded-xl shadow-lg p-2 hover:scale-105 duration-500'>
                            <i><SiTailwindcss className='mx-auto w-20 h-20 text-[#06b6d4]' /></i>
                            <p className='pt-2 text-center'>Tailwind</p>
                        </div>
                        <div className='bg-gray-700 border border-gray-400/20 rounded-xl shadow-lg p-2 hover:scale-105 duration-500'>
                            <i><SiPhp className='mx-auto w-20 h-20 text-[#777bb3]' /></i>
                            <p className='pt-2 text-center'>PHP</p>
                        </div>
                        <div className='bg-gray-700 border border-gray-400/20 rounded-xl shadow-lg p-2 hover:scale-105 duration-500'>
                            <i><FaPython className='mx-auto w-20 h-20 text-[#ffffff]' /></i>
                            <p className='pt-2 text-center'>Python</p>
                        </div>
                        <div className='bg-gray-700 border border-gray-400/20 rounded-xl shadow-lg p-2 hover:scale-105 duration-500'>
                            <i><FaJava className='mx-auto w-20 h-20 text-[#ffffff]' /></i>
                            <p className='pt-2 text-center'>Java</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience