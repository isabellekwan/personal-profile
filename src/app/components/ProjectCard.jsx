import React, { useState } from 'react'
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import ImageSlider from './ImageSlider'
import "../modal.css"
import "../globals.css"

const ProjectCard = ({imgUrl, title, description, gitUrl, slideshowImages}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
        <div 
          className="h-52 md:h-72 rounded-t-xl relative group" // marked as group so child will be dependant
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover"}}
        >
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#5d4d3d] rounded-t-xl bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link 
            href={gitUrl} 
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white"/>
          </Link>
          <button
            onClick={openModal}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </button>
        </div>
      </div>
      <div className="text-[#e9e5e1] rounded-b-xl bg-[#5d4d3d] py-4 px-4">
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p>{description}</p>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
          <button onClick={closeModal} className="close-modal-button">
            <span className="close-modal-icon">&#10006;</span>
          </button>
            <ImageSlider slideshowImages={slideshowImages} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard