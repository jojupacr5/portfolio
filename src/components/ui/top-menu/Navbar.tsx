'use client'
import Link from "next/link"
import { FaMoon, FaSun } from "react-icons/fa"
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri"

import { useUIStore } from "@/store"
import { titleFont } from "@/config/fonts"

export const Navbar = () => {
  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen);
  const openMenu = useUIStore( state => state.openSideMenu);
  const closeMenu = useUIStore( state => state.closeSideMenu);

  const handleOpen = () => {
    openMenu();
    document.body.classList.add("overflow-hidden");
  }
  
  const handleClose = () => {
    closeMenu();
    document.body.classList.remove("overflow-hidden");
  }

  return (
    <nav className="flex pt-4 justify-between items-center w-full text-secondary dark:text-white-primary">
      {/* Logo */}
      <div >
        <Link
          className="flex flex-col"
          href="/" 
          onClick={handleClose} 
        >
          <span className={`${titleFont.className} antialiased text-5xl tracking-wider m-0 p-0`}>JP.</span>
          <span className="text-md -mt-2"> Joseph Paucar</span>
        </Link>
      </div>

      {/* Theme, Menu */}
      <div className="flex items-center">
        <button 
          className="p-2"
        >
          <FaMoon className="w-5 h-5 hidden transition-all hover:text-primary" />
          <FaSun className="w-5 h-5 transition-all hover:text-primary"/>
        </button>

        <Link 
          className="ml-2 py-2 px-3 text-secondary dark:text-white-primary font-semibold uppercase transition-all hover:text-primary hidden sm:block"
          href="/about"
        >About</Link>
        <Link 
          className="ml-2 py-2 px-3 text-secondary dark:text-white-primary font-semibold uppercase transition-all hover:text-primary hidden sm:block"
          href="/projects/1"
        >Projects</Link>
        <Link 
          className="ml-2 py-2 pl-3 text-secondary dark:text-white-primary font-semibold uppercase transition-all hover:text-primary hidden sm:block"
          href="/contact"
        >Contact</Link>

        {
          !isSideMenuOpen
            ? (
              <button 
                onClick={handleOpen}
                className="mx-2 p-2 sm:hidden"
              >
                <RiMenu3Fill  className="w-6 h-6" />
              </button>
              )
            : (
              <button 
                onClick={handleClose}
                className="mx-2 p-2 sm:hidden"
              >
                <RiCloseFill  className="w-6 h-6" />
              </button>
            )
        }
        
      </div>
    </nav>
  )
}