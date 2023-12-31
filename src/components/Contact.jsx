import React, { useEffect, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
    const { t } = useTranslation();

    let limit = 300;

    const [{ content, wordCount }, setContent] = React.useState({
        content: "",
        wordCount: 0
    });

    const setFormattedContent = useCallback(
        text => {
            let words = text.split(' ').filter(Boolean);
            if (words.length > limit) {
                setContent({
                    content: words.slice(0, limit).join(' '),
                    wordCount: limit
                });
            } else {
                setContent({ content: text, wordCount: words.length });
            }
        },
        [limit, setContent]
    );

    useEffect(() => {
        setFormattedContent(content);
    }, []);

    return (
        <div name="contact" >
            <div className="h-fit md:h-screen w-full bg-primary">
                <form className='hide text-black flex flex-col p-7 md:w-[600px] h-full justify-center mx-auto' action="/" method='POST'>
                    <h1 className='text-white text-3xl border-b-4 border-purple max-w-fit mb-5'>{t("contact")}</h1>
                    <label className='text-white mb-1 mt6' htmlFor="email">{t("label-email")}</label>
                    <input className='outline-none rounded-md py-2 px-3' type="email" id='email' name='email' required />
                    <label className='text-white mb-1 mt-6' htmlFor="message">{t("label-message")}</label>
                    <textarea className='resize-none outline-none rounded-md text-black p-3' name="message" id="message" cols="30" rows="10" onChange={event => setFormattedContent(event.target.value)} value={content} required /><p className='text-white mt-4'>{wordCount}/{limit}</p>
                    <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-2/4 m-auto py-2 px-4 my-6 rounded">
                        {t("contact-btn")}
                    </button>   
                </form>
            </div>
        </div>
    )
}

export default Contact