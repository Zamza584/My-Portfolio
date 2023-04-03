import { useEffect } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import "./components/Navbar";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

// #1E44B9 -- primary 
// #FF7F65 -- orange
// #C1C2FF -- purple
// #FFFADE -- cream 
// #474555 -- black 

function App() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));
  })

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work /> 
    </>
  );
}

export default App;
