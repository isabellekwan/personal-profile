import React from 'react'

const TabAbout = ({active, selectTab, children}) => {
    const buttonClasses = active 
    ? "text-[#7c6752] border-b border-[#7c6752]" 
    : "text-[#7c6752]";

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold text-xl hover:text-[#C4A484] ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )
}

export default TabAbout