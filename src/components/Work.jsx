import React from 'react';
import sleepoutside from "../images/sleepoutsidesite.png"
import fanabase from "../images/fanabase.png"
import musicSite from "../images/musicwebsite.png"; 
import phpmotors from '../images/phpmotors-website.png'
import WorkComponentCard from '../helpers/WorkComponentCard';
import { useTranslation } from 'react-i18next'


const Work = () => {
    const { t } = useTranslation();
    return (
        <div name="work" className="h-fit lg:h-fit m-auto max-w-[900px] pt-[100px] lg:pb-[300px]  bg-white">
            <div className='p-5 w-full md:w-[100%] lg:w-[100%] mx-auto flex flex-col justify-center  text-black' >
                <h1 className='text-primary text-3xl border-b-4 border-purple max-w-fit'>{t("work")}</h1>
                <div className='mt-10 hide flex flex-row w-full gap-5 flex-wrap'>
                    <WorkComponentCard image={sleepoutside} url={"https://heartfelt-lily-f08aa2.netlify.app/"} name={"SleepOutside Site"} trello={<div className='text-orange'><a href="https://trello.com/b/fWLRGD50/wdd330-teamtooawesome">{t("work-trello")}</a></div>}/>
                    <WorkComponentCard image={fanabase} url={"https://moviefanabase.netlify.app/"} name={"Movie Fanabase"}/>
                    <WorkComponentCard image={musicSite} url={"https://album-by-year-api.onrender.com"} name={"Music Album Api"}/>
                    <WorkComponentCard image={phpmotors} url={"https://phpmotors-byui.000webhostapp.com/index.php"} name={"PHP motors site"}/>
                </div>
            </div>
        </div>

    )
}

export default Work