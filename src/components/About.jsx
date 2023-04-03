import React from 'react'

const About = () => {
    return (
        <div name="about" className="h-screen w-full bg[#1E44B9]">
            <div className='p-7 md:w-[600px] mx-auto flex flex-col justify-center h-full' >
                <div className='hide'>
                    <h1 className='text-[#1E44B9] text-3xl border-b-4 border-[#C1C2FF] max-w-fit '>About Me</h1>
                    <div className='mt-3 grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-[#474555]'>
                        <p className='text-lg font-medium'>I am a web developer who has experience creating responsive websites.</p>
                        <p>I am creative and productive and have great discipline to build any form of web page. I love to stay in touch with new technologies and find ways to work in a very efficient way. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About