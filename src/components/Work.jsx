import React from 'react';
import phpmotors from '../images/phpmotors-website.png'
import sleepoutside from "../images/sleepoutsidesite.png"
import fanabase from "../images/fanabase.png"
import WorkComponentCard from '../helpers/WorkComponentCard';


const Work = () => {
    return (
        <div name="work" className="h-fit lg:h-fit m-auto max-w-[900px] pt-[100px] lg:pb-[300px]  bg-white">
            <div className='p-5 w-full md:w-[100%] lg:w-[100%] mx-auto flex flex-col justify-center  text-black' >
                <h1 className='text-primary text-3xl border-b-4 border-purple max-w-fit'>Work</h1>
                <div className='mt-10 hide flex flex-row w-full gap-5 flex-wrap'>
                    <WorkComponentCard image={sleepoutside} url={"https://heartfelt-lily-f08aa2.netlify.app/"} name={"SleepOutside Site"} trello={<div className='text-orange'><a href="https://trello.com/b/fWLRGD50/wdd330-teamtooawesome">Trello Site</a></div>}/>
                    <WorkComponentCard image={fanabase} url={"https://movie-fanabase.netlify.app/"} name={"Movie Fanabase"}/>
                </div>
            </div>
        </div>

    )
}

export default Work