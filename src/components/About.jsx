import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation();
    return (
        <div name="about" className="h-screen w-full bg[#1E44B9]">
            <div className='p-7 md:w-[600px] mx-auto flex flex-col justify-center h-full' >
                <div className='hide'>
                    <h1 className='text-[#1E44B9] text-3xl border-b-4 border-[#C1C2FF] max-w-fit '>{t("about")}</h1>
                    <div className='mt-3 grid sm:grid-cols-1 md:grid-cols-2 gap-4 text-[#474555] text-lg'>
                        <p>{t("about-1")}</p>
                        <p>{t("about-2")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About