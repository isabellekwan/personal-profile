//rafce --> command to generate skeleton code

"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Header = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-[#5d4d3d] mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
                    <span className="text-transparent bg-clip-text bg-[#5d4d3d]"> Hello, I&apos;m {""}</span><br></br>
                    <TypeAnimation
                        sequence={[
                            'Isabelle',
                            1000,
                            'a 3nd Year CS Student',
                            1000,
                            'a Web Developer',
                            1000,
                            'a Graphic Designer',
                            1000,
                            'Inspired ☆',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#7c6752] text-base sm:text-lg mb-6 lg:text-xl">
                    Welcome to my portfolio!
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#7c6752] hover:bg-[#5d4d3d] text-white">
                        Contact Me
                    </button>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#7c6752] hover:bg-[#5d4d3d] text-white">
                        Download CV
                    </button>
                </div>
            </div>
            <div className="col-span-5">
                <Image
                    src="/images/portrait.png"
                    alt="circle portrait"
                    width={300}
                    height={300}
                />
            </div>
        </div>
    </section>
  )
}

export default Header