import React from "react";


import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import tailwind from '../assets/tailwind.png'

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4">
        <div>
          <p className="text-4xl inline border-b-4 border-pink-600 font-bold">
            Skills
          </p>
          <p className="py-4">These are the Technologies I've Worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 text-center">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={html} alt="HTML Icon" />
                <p className="my-4">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={css} alt="HTML Icon" />
                <p className="my-4">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={javascript} alt="HTML Icon" />
                <p className="my-4">JAVASCRIPT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={react} alt="HTML Icon" />
                <p className="my-4">REACT</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={github} alt="HTML Icon" />
                <p className="my-4">GITHUB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={node} alt="HTML Icon" />
                <p className="my-4">NODE JS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={mongo} alt="HTML Icon" />
                <p className="my-4">MONGO DB</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                <img className="w-20 mx-auto" src={tailwind} alt="HTML Icon" />
                <p className="my-4">TAILWIND CSS</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
