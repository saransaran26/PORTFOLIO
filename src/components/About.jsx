import React from "react";

function About() {
  return (
    <div className="bg-[#0a192f] w-full h-screen text-gray-300" name="about">
      <div className="max-w-[1000px] mx-auto px-8 h-full flex flex-col items-center justify-center">
        <h2 className="text-6xl my-6 text-pink-600">About</h2>
        <p className="text-xl leading-loose tracking-normal">
          I am a dedicated Full Stack Developer with a strong foundation in web
          development, having honed my skills at the prestigious GUVI Institute.
          My primary focus lies in MERN Stack Development, where I thrive on
          creating innovative solutions to address the end-users' needs. With a
          passion for problem-solving, I am committed to applying my expertise
          to tackle real-world challenges and deliver results. Let's connect and
          collaborate to make a meaningful impact in the tech world together
        </p>
      </div>
    </div>
  );
}

export default About;
