import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Manage Ur Medications (M.U.M)",
        description: "Website that allows user’s to manage their medical needs discretely",
        imageUrl: "/images/projects/MUM-2.png",
        tag: ["All","Web"]
    },
    {
        id: 2,
        title: "SFU Fitness Tracker",
        description: "Web application that allows users users to track their fitness journey at SFU",
        imageUrl: "/images/projects/SFUFit-1.png",
        tag: ["All","Web"] 
    },
    {
        id: 3,
        title: "Villain Report System",
        description: "Website that allows users to report villain sightings in their area!",
        imageUrl: "/images/projects/VillainMap-1.png",
        tag: ["All","Web"] 
    },
    {
        id: 4,
        title: "Wellin5 Brand Design",
        description: "Full brand redeign for the mental health company, Wellin5",
        imageUrl: "/images/projects/Wellin5-1.png",
        tag: ["All","Web"] 
    }
]

const Projects = () => {
  return (
    <>
        <h1 className="text-[#5d4d3d] mt-12 mb-4 lg:mb-6 text-3xl sm:text-5xl lg:text-5xl font-bold">My Projects</h1>
        <div>
            {projectsData.map((project) => (
            <ProjectCard key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.imageUrl}
                />
            ))}
        </div>
    </>
  );
};

export default Projects