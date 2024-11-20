import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function ThemeSwitch()  {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() =>{
    const theme = localStorage.getItem("theme")
    if ( theme === "dark" ) setDarkMode(true)
  }, []);

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }
  }, [darkMode]);


  return (
    <div 
      className="w-5 h-full d-flex items-center transition-all hover:text-primary cursor-pointer"
      onClick={() => setDarkMode(!darkMode)}
    >
      {
        !darkMode
          ? <FaMoon />
          : <FaSun />
      }
    </div>
  )
}
