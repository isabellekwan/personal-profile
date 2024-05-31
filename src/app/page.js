"use client";

import Image from 'next/image'
import Header from './components/Header'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import EmailSection from './components/EmailSection'
import ImageSlider from './components/ImageSlider';
import { ChakraProvider } from '@chakra-ui/react'

// colours:
// beige: #e9e5e1
// light light brown: #a39485
// light brown:#7c6752
// brown: #6f5c49
// dark brown: ##5d4d3d

export default function Home() {
  return (
    <ChakraProvider>
      <main className="flex min-h-screen flex-col bg-[#e9e5e1]">
        <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4">
          <Header/>
          <About/>
          <Projects/>
          <EmailSection/>
        </div>
      </main>
    </ChakraProvider>
    
  )
}
