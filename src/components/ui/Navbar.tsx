import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { FaMoon, FaSun } from "react-icons/fa"
import { RiMenu3Fill } from "react-icons/ri"

export const Navbar = () => {
  return (
    <nav className="flex py-4 justify-between items-center w-full">
      {/* Logo */}
      <div >
        <Link
          className="flex flex-col"
          href="/"  
        >
          <span className={`${titleFont.className} antialiased text-5xl tracking-wider m-0 p-0`}>JP.</span>
          <span className="text-md -mt-2"> Joseph Paucar</span>
        </Link>
      </div>

      {/* Theme, Menu */}
      <div className="flex items-center">
        <button 
          className="mx-2 p-2"
        >
          <FaMoon className="w-5 h-5 hidden transition-all hover:fill-orange-500" />
          <FaSun className="w-5 h-5 transition-all hover:fill-orange-500"/>
        </button>

        <Link 
          className="m-2 py-2 px-3 transition-all hover:text-orange-500"
          href="/about"
        >About</Link>
        <Link 
          className="m-2 py-2 px-3 transition-all hover:text-orange-500"
          href="/projects/1"
        >Projects</Link>
        <Link 
          className="m-2 py-2 px-3 transition-all hover:text-orange-500"
          href="/contact"
        >Contact</Link>

        <button 
          className="mx-2 p-2"
        >
          <RiMenu3Fill  className="w-6 h-6" />
        </button>
      </div>
    </nav>
  )
}