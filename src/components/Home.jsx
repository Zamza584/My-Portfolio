import React from "react";
import { Link } from "react-scroll";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from 'react-i18next'



const Home = () => {
  const { t } = useTranslation();

  return (
    <div name="home" className="h-screen w-full bg-[#1E44B9]">
          <LanguageSelector />
      <div className="hide mx-auto md:w-[600px] flex flex-col justify-center h-full px-8">
        <div className="hide">
          <p className="text-[#FFFADE] text-xl">{t("intro-1")}</p>
          <h1 className="text-6xl font-normal">Manuel Zamalloa</h1>
          <h1 className="text-3xl font-thin ">{t("intro-2")}</h1>
          <Link to="work" spy={true} smooth={true} duration={500}>
            <button className="w-[150px] bg-[#FFFADE] rounded-md hover:bg-slate-900 hover:text-blue-400 text-[#474555] mt-4 py-1">{t("btn-intro")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
