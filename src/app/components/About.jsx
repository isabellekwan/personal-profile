"use client";
import React, { useTransition, useState } from 'react'
import TabAbout from './TabAbout';
import ImageSlider from './ImageSlider'

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li><strong>Languages</strong></li>
        <br></br>
        <ul class="pl-8">
          <li>{"★ JavaScript"}</li>
          <li>{"★ TypeScript"}</li>
          <li>{"★ HTML/CSS"}</li>
          <li>{"★ Python"}</li>
          <li>{"★ C/C++"}</li>
        </ul>
        <br></br>
        <li><strong>Frameworks and Libraries</strong></li>
        <br></br>
        <ul class="pl-8">
          <li>{"★ ReactJS"}</li>
          <li>{"★ NextJS"}</li>
          <li>{"★ AngularJS"}</li>
          <li>{"★ Ruby on Rails"}</li>
          <li>{"★ Bootstrap"}</li>
          <li>{"★ Tailwind"}</li>
        </ul>
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
        <li>★ Software Engineering Intern, Interactive Experiences Lab</li>
        <li>★ Research Intern, Interactive Experiences Lab</li>
        <li>★ Undergraduate Researcg Assistant, GrUVI Lab </li>
        <li>★ Student Ambassador, SFU Faculty of Applied Sciences</li>
        <li>★ President, CS Student Society </li>
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
        <li>{"★ President's Honour Roll 2024"}</li>
        <li>{"★ Dean's Honour Roll Fall 2023 and Spring 2024"}</li>
        <li>★ Computing Science Student Society Undergraduate Award</li>
        <li>★ SFU Undergraduate Entrance Scholarship with Distinction</li>
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
    <section id="about" className="text-align-center mt-12">
      <div className="text-center">
        <h1 className="text-[#5d4d3d] mt-12 mb-4 lg:mb-6 text-3xl sm:text-5xl lg:text-5xl font-bold">About Me</h1>
        <p className="text-[#7c6752] text-base sm:text-lg mt-2 mb-6 lg:text-xl px-15">
          Hi there! My name is Isabelle Kwan and I am a third year student pursuing a Bachelor of Science in Computing Science at Simon Fraser University! 
          I am particularly interested in various human-computer interaction topics, but I am always open to learning and exploring different topics in technology.
          Currently, I have experience in web development, graphic design, and full-stack development! As well, I have experience in HCI and visual computing research!
          <br /><br />
          Aside from that, some personal interests of mine include dance, fashion, poetry, crochet, and video games
          (My personal favorites are Animal Crossing and Unpacking on Steam!). As well, I love making personal vlogs for my YouTube channel
          which you can find here!
          <a href="https://www.youtube.com/channel/UC11O9tOQoa0FszZdmI4oAKw" target="_blank" rel="noopener noreferrer" className=" text-[#5d4d3d] font-bold hover:text-[#7c6752]"> @bellekwan</a>
        </p>
      </div>
      <div className="section"></div>
      <div className="links">
        
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="border-2 border-[#5d4d3d] p-8 rounded-lg">
          <div className="flex flex-wrap mb-4">
            <TabAbout selectTab={() => handleTabChange("skills")} active={tab === "skills"}> Skills </TabAbout>
            <TabAbout selectTab={() => handleTabChange("education")} active={tab === "education"}> Education </TabAbout>
            <TabAbout selectTab={() => handleTabChange("experience")} active={tab === "experience"}> Experience </TabAbout>
            <TabAbout selectTab={() => handleTabChange("awards")} active={tab === "awards"}> Awards </TabAbout>
          </div>
          <div className="mt-8 text-[#5d4d3d] text-left">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        <div className="p-8 text-left overflow-hidden">
          <h2 className="text-xl font-semibold text-[#5d4d3d] mb-4">My life!</h2>
          <div className="overflow-hidden drop-shadow-lg">
            <ImageSlider />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About