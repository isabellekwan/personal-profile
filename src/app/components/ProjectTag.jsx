import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected
  ? "text-[#e9e5e1] bg-[#5d4d3d]"
  : "text-[#5d4d3d] border-[#5d4d3d] hover:border-white hover:text-white"
    return (
        <button
            className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
  );
};

export default ProjectTag