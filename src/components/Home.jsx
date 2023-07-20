import React from "react";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#1E44B9]">
      <div className="hide mx-auto md:w-[600px] flex flex-col justify-center h-full px-8">
        <div className="hide">
          <p className="text-[#FFFADE] text-xl">Hi my name is</p>
          <h1 className="text-6xl font-normal">Manuel Zamalloa</h1>
          <h1 className="text-3xl font-thin ">I'm a Full Stack Developer</h1>
          <Link to="work" spy={true} smooth={true} duration={500}>
            <button className="w-[150px] bg-[#FFFADE] rounded-md hover:bg-slate-900 hover:text-blue-400 text-[#474555] mt-4 py-1">View Work</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
