import React from 'react';
import phpmotors from '../images/phpmotors-website.png'
import WorkComponentCard from '../helpers/WorkComponentCard';


const Work = () => {
    return (
        <div name="work" className="h-fit lg:h-fit m-auto max-w-[1550px] pt-[100px] lg:pb-[300px]  bg-white">
            <div className='p-5 w-full md:w-[100%] lg:w-[100%] mx-auto flex flex-col justify-center  text-black' >
                <h1 className='text-primary text-3xl border-b-4 border-purple max-w-fit'>Work</h1>
                <div className='mt-10 hide flex flex-row w-full gap-5 flex-wrap'>
                    <WorkComponentCard image={phpmotors}/>
                    <WorkComponentCard image={phpmotors}/>
                    <WorkComponentCard image={phpmotors}/>
                    <WorkComponentCard image={phpmotors}/>
                    <WorkComponentCard image={phpmotors}/>
                    <WorkComponentCard image={phpmotors}/>
                </div>
            </div>
        </div>

    )
}

export default Work