import React from 'react'

const Work = () => {
    return (
        <div name="work" className="h-screen w-full bg-white">
            <div className='p-7 md:w-[600px] mx-auto flex flex-col justify-center h-full text-black' >
                <div className='hide'>
                    <h1 className='text-primary text-3xl border-b-4 border-purple max-w-fit'>Work</h1>
                    <div className=' mt-3 '>
                        <h2>Name: Website</h2>
                        <a className='border-b-2 border-purple' href="">link to website</a>
                    </div>
                    <div className=' mt-3 '>
                        <h2>Name: Website</h2>
                        <a className='border-b-2 border-purple' href="">link to website</a>
                    </div>
                    <div className=' mt-3 '>
                        <h2>Name: Website</h2>
                        <a className='border-b-2 border-purple' href="">link to website</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Work