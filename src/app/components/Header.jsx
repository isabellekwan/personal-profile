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
                            'a Computing Science Student',
                            1000,
                            'a Web Developer',
                            1000,
                            'a Graphic Designer',
                            1000,
                            'a Researcher',
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
                    <a href="https://linktr.ee/isabellekwan" className="block sm:inline-block px-6 py-3 w-full sm:w-fit mb-4 sm:mb-0 sm:mr-4 lg:mr-4 rounded-full bg-[#7c6752] hover:bg-[#5d4d3d] text-white text-center">
                        My Linktree
                    </a>
                    <a href="/Isabelle_Kwan_CV__Summer_2024_.pdf" download className="block sm:inline-block px-6 py-3 w-full sm:w-fit mb-4 sm:mb-0 sm:mr-4 lg:mr-0 rounded-full bg-[#7c6752] hover:bg-[#5d4d3d] text-white text-center">
                        Download CV
                    </a>
                </div>
            </div>
            <div className="col-span-5 flex justify-center sm:justify-start mt-8 sm:mt-0">
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

export default Header;
