import React from 'react'
import { useTranslation } from 'react-i18next'


const WorkComponentCard = ({ image, url, name, trello }) => {
    const { t } = useTranslation();
    
    return (
        <div
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: "center" }}
            className="shadow-lg bg-gray-900 shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div w-[350px] h-[200px] relative -z-20"
        >
            <div className="opacity-0 group-hover:opacity-100 p-3">
                <div className='absolute bg-primary w-full h-full rounded-md  top-0 left-0 opacity-70 -z-10 '></div>
                <span className="text-2xl font-extrabold text-white tracking-wider z-10">
                    {name}
                </span>
                {trello}
                <div className="pt-8 text-center">
                    <a href={url} target="_blank" >
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg ">
                            {t("work-btn")}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
WorkComponentCard.defaultProps = {
    url: '/'
}

export default WorkComponentCard;