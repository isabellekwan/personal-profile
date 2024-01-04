"use client";
import React, { useTransition, useState } from 'react'
import TabAbout from './TabAbout';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        
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
          Hi there! My name is Isabelle Kwan and I am a second year student studying computing science at Simon Fraser University! <br/>
          I am particularly interested in visual computing, but I am always open to learning and exploring different topics in technology.<br/>
          Currently, I have experience in web development, graphic design, and full-stack development!
          <br /><br />
          Aside from that, some personal interests of mine include dance, fashion, graphic design, and video games <br/>
          (My personal favorites are Animal Crossing and Unpacking on Steam!). As well, I love making personal vlogs for my  <br/> YouTube channel
          which you can find here!
          <a href="https://www.youtube.com/channel/UC11O9tOQoa0FszZdmI4oAKw" target="_blank" rel="noopener noreferrer" className=" text-[#5d4d3d] font-bold hover:text-[#7c6752]"> @bellekwan</a>
        </p>
        <div className="flex flex-row mt-8">
          <TabAbout selectTab={() => handleTabChange("skills")} active={tab==="skills"}> Skills </TabAbout>
          <TabAbout selectTab={() => handleTabChange("education")} active={tab==="education"}> Education </TabAbout>
          <TabAbout selectTab={() => handleTabChange("experience")} active={tab==="experience"}> Experience </TabAbout>
        </div>
      </div>
    </section>
  )
}

export default About