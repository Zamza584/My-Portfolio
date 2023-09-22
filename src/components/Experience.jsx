import React from 'react'
import { FaCss3, FaReact, FaPython, FaJava, FaSass } from 'react-icons/fa'
import { SiTailwindcss, SiPhp } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { useTranslation } from 'react-i18next'
import javaIcon from '../images/java.png';


const Experience = () => {
    const { t } = useTranslation();

    return (
        <div name="experience" className="h-fit md:h-screen w-full bg-white">
            <div className='hide p-7 mx-auto flex flex-col justify-center h-full md:w-[600px]' >
                <div className='hide'>
                    <h1 className='text-primary text-3xl border-b-4 border-purple max-w-fit'>{t("experience")}</h1>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 py-10 gap-6' >
                        <div className='bg-gray-700 border border-gray-400/20 rounded-xl shadow-lg p-2 hover:scale-105 duration-500'>
                            <i><SiJavascript className='mx-auto w-20 h-20 text-[#f0db4f]' /></i>
                            <p className='pt-2 text-center'>JavaScript</p>
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
                            <i><FaSass className='mx-auto w-20 h-20 text-[#CD6799]' /></i>
                            <p className='pt-2 text-center'>Sass</p>
                        </div>
                        <div className='bg-gray-700 border border-gray-400/20 rounded-xl shadow-lg p-2 hover:scale-105 duration-500'>
                            <i><FaPython className='mx-auto w-20 h-20 text-[#ffffff]' /></i>
                            <p className='pt-2 text-center'>Python</p>
                        </div>
                        <div className='bg-gray-700 border border-gray-400/20 rounded-xl shadow-lg p-2 hover:scale-105 duration-500'>
                            <i><img className='mx-auto w-20 h-20' src={javaIcon} alt="java" /></i>
                            <p className='pt-2 text-center'>Java</p>
                        </div>
                        <div className='bg-gray-700 border border-gray-400/20 rounded-xl shadow-lg p-2 hover:scale-105 duration-500'>
                            <i><FaCss3 className='mx-auto w-20 h-20 text-[#2965f1]' /></i>
                            <p className='pt-2 text-center'>CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience