"use client";
import Link from 'next/link'
import NavLink from './NavLink'
import Image from 'next/image';

const navLinks = [
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Projects",
        href: "#projects",
    },
    {
        title: "Contact",
        href: "#contact",
    }
]

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#e9e5e1]">
        <div className="flex flex-wrap items-center justify-between mx-auto p-8">
            <Link href={'/'}>
                <img src="/images/logo.png" alt="Logo" className="h-10 md:h-12" />
            </Link>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    {
                        navLinks.map((link,index)=> (
                            <li key={index}>
                                <NavLink href={link.href} title= {link.title}>{link.title}</NavLink>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar