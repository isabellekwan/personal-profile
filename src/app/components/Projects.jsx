"use client";
import React, { useState, useRef } from "react";
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion, useInView} from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Manage Ur Medications (M.U.M)",
        description: "Website that allows user’s to manage their medical needs discretely",
        imageUrl: "/images/projects/MUM-2.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/isabellekwan/nw-hacks",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "SFU Fitness Tracker",
        description: "Web application that allows users users to track their fitness journey at SFU",
        imageUrl: "/images/projects/SFUFit-1.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/isabellekwan/SFU-Recreation-Fitness-Tracker",
        previewUrl: "/",     
    },
    {
        id: 3,
        title: "Villain Report System",
        description: "Website that allows users to report villain sightings in their area!",
        imageUrl: "/images/projects/VillainMap-1.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/isabellekwan/Villain-Map",
        previewUrl: "/", 
    },
    {
        id: 4,
        title: "Wellin5 Brand Design",
        description: "Full brand redeign for the mental health company, Wellin5",
        imageUrl: "/images/projects/Wellin5-1.png",
        tag: ["All","Design"],
        gitUrl: "https://www.behance.net/gallery/200182463/Wellin5-Brand-Redesign",
        previewUrl: "/", 
    }
];

const Projects = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

  return (
    <section id="projects" className="flex flex-col items-center">
        <h1 className="text-[#5d4d3d] mt-12 mb-4 lg:mb-6 text-3xl sm:text-5xl lg:text-5xl font-bold">My Projects</h1>
        <div className="text-[#5d4d3d] flex flex-row justify-center items-center gap-2 py-5">
            <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
            />
            <ProjectTag
            onClick={handleTagChange}
            name="Design"
            isSelected={tag === "Design"}
            />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-8">
            {filteredProjects.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.imageUrl}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                        />
                </motion.li>
            ))}
        </ul>
    </section>
  );
};

export default Projects