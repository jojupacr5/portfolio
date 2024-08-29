'use client'
import { titleFont } from "@/config/fonts"
import { useState } from "react"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"

export const AccordionItem = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if( selected === i ) {
      return setSelected(null);
    }

    setSelected(i)
  }

  const data = [
    {
      title: 'good at',
      answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
    },
    {
      title: 'learning',
      answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
    },
    {
      title: 'hobbies',
      answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
    },
    {
      title: 'music',
      answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
    }
  ]

  return (
    <div className="mt-4">
      {
        data.map((item, i) => (
          <div key={i} >
            <button 
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full p-4 text-secondary bg-primary  hover:bg-white-secondary gap-3"
            >
              <span className={`${titleFont.className} text-md`}>{ item.title }</span>
              {
                selected === i
                ? <IoMdArrowDropup className="w-6 h-6" />
                : <IoMdArrowDropdown className="w-6 h-6" />
              }
            </button>
            <div className={ selected === i ? 'block' : 'hidden' }>
              <div className="p-5 border border-t-0 border-black-secondary dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 text-gray-500 dark:text-gray-400">{item.answer}</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}