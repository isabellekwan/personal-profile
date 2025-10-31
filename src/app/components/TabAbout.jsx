import React from 'react'

const TabAbout = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-[#5d4d3d] border-b-2 border-[#5d4d3d] bg-[#e9e5e1] rounded-md px-3 py-1"
    : "text-[#e9e5e1] border-b-2 border-transparent hover:text-[#e9e5e1] hover:border-[#e9e5e1]";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold text-lg transition-all duration-200 ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabAbout;
