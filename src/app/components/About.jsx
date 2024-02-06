"use client";
import React, { useTransition, useState } from 'react'
import TabAbout from './TabAbout';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>★ ReactJS</li>
        <li>★ NextJS</li>
        <li>★ AngularJS</li>
        <li>★ JavaScript</li>
        <li>★ TypeScript</li>
        <li>★ HTML/CSS</li>
        <li>★ Tailwind</li>
        <li>★ Python</li>
        <li>★ C/C++</li>
        <li>★ Ruby on Rails</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>★ B.Sc in Computing Science, Simon Fraser University</li>
        <li>{"★ High School Diploma, St. Patrick's Regional Secondary School"}</li>
      </ul>
    )
  },
  {
    title: "Experince",
    id: "experience",
    content: (
      <ul>
        <li>★ Undergraduate Research Assistant, SFU Visual Computing </li>
        <li>★ Student Ambassador, SFU Faculty of Applied Sciences</li>
        <li>★ Director of Communications, CS Student Society </li>
        <li>★ Tutor, SFU and Self-employed</li>
      </ul>
    )
  },
  {
    title: "Awards",
    id: "awards",
    content: (
      <ul>
        <li>★ SFU Undergraduate Entrance Scholarship with Distinction</li>
        <li>{"★ Dean's Honour Roll Fall 2023"}</li>
        <li>★ Computing Science Student Society Undergraduate Award</li>
        <li>★ BC Excellence Award</li>
        <li>{"★ Govenor General's Bronze Academic Medal"}</li>
      </ul>
    )
  }
]

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(()=> {
      setTab(id);
    });
  };

  return (
    <section className="flex items-center justify-center text-align-center mt-12">
      <div className="text-center">
        <h1 className="text-[#5d4d3d] mt-12 mb-4 lg:mb-6 text-3xl sm:text-5xl lg:text-5xl font-bold">About Me</h1>
        <p className="text-[#7c6752] text-base sm:text-lg mt-2 mb-6 lg:text-xl">
          Hi there! My name is Isabelle Kwan and I am a second year student pursuing a Bachelor of Science in Computing Science at <br/>Simon Fraser University! 
          I am particularly interested in visual computing, but I am always open to learning and exploring <br/> different topics in technology.
          Currently, I have experience in web development, graphic design, and full-stack development!
          <br /><br />
          Aside from that, some personal interests of mine include dance, fashion, poetry, graphic design, and video games <br/>
          (My personal favorites are Animal Crossing and Unpacking on Steam!). As well, I love making personal vlogs for my  <br/> YouTube channel
          which you can find here!
          <a href="https://www.youtube.com/channel/UC11O9tOQoa0FszZdmI4oAKw" target="_blank" rel="noopener noreferrer" className=" text-[#5d4d3d] font-bold hover:text-[#7c6752]"> @bellekwan</a>
        </p>
        <br/>
        <div className="flex justify-start mt-12">
          <div className="flex flex-col rounded-lg border-2 border-[#5d4d3d] p-8 w-1/2">
            <div className="flex flex-wrap mb-4">
                <TabAbout selectTab={() => handleTabChange("skills")} active={tab==="skills"}> Skills </TabAbout>
                <TabAbout selectTab={() => handleTabChange("education")} active={tab==="education"}> Education </TabAbout>
                <TabAbout selectTab={() => handleTabChange("experience")} active={tab==="experience"}> Experience </TabAbout>
                <TabAbout selectTab={() => handleTabChange("awards")} active={tab==="awards"}> Awards </TabAbout>
            </div>
            <div className="mt-8 text-[#5d4d3d] text-left">
              {TAB_DATA.find((t)=> t.id === tab).content}
            </div>
          </div>
          <div className="ml-8 p-8 text-left w-1/2">
          <h2 className="text-xl font-semibold text-[#5d4d3d] mb-4">More About Me!</h2>
            <p className="text-[#7c6752]">
              Favourite<br/>
              Favourite

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About