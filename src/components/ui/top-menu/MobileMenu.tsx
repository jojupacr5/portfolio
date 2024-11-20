'use client'
import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const MobileMenu = () => {

  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen);
  const closeMenu = useUIStore( state => state.closeSideMenu);

  return (
    <div>
      {/* Background Glass */}
      {
        isSideMenuOpen && (
          <div className="pt__mobile-menu fixed left-0 w-screen z-10 shadow-sm bg-white/70 backdrop-blur-sm" />
        )        
      }

      <nav
        className={
          clsx(
            "pt__mobile-menu fixed p-5 right-0 w-screen bg-transparent dark:bg-secondary z-20 transform transition-all duration-300",
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }
      >
        <div className="pt__mobile-menu flex flex-col w-full items-center justify-center text-secondary dark:text-white-primary">
          <Link 
            className="py-2 px-3 text-lg mb-4 transition-all hover:text-primary uppercase font-bold"
            href="/projects/1"
            onClick={closeMenu}
          >Projects</Link>
          <Link 
            className="py-2 px-3 text-lg mb-10 transition-all hover:text-primary uppercase font-bold"
            href="/contact"
            onClick={closeMenu}
          >Contact</Link>

          <span className="text-lg font-bold mb-4">mailme@josephpaucar.dev</span>

          <div className="flex justify-center items-center">
            <a href="/" target="_blank" className="mr-4">
              <FaGithub className="w-6 h-6 fill-secondary dark:fill-white hover:fill-primary transition-all" />
            </a>
            <a href="/" target="_blank" className="mr-4">
              <FaLinkedin className="w-6 h-6 fill-secondary dark:fill-white hover:fill-primary transition-all" />
            </a>
            <a href="/" target="_blank">
              <FaInstagram className="w-6 h-6 fill-secondary dark:fill-white hover:fill-primary transition-all" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}