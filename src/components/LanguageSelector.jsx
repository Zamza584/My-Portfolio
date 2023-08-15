import React, { useState } from "react";
import i18n from '../i18n';

const LanguageSelector = () => {

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

    const chooseLanguage = (e) => {
        e.preventDefault();
        i18n.changeLanguage(e.target.value);   // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
        setSelectedLanguage(e.target.value);
    }

    return (
        <div className="z-10 py-1 px-2 rounded-xl shadow-sm border-none bg-indigo-400 text-white w-[fit-content] absolute top-[15%] right-[10%]">
            <select className="z-10 bg-indigo-400" defaultValue={selectedLanguage} onChange={chooseLanguage}>
                <option value="sp">Español</option>
                <option value="en">English</option>
            </select>
        </div>
    );
};

export default LanguageSelector;