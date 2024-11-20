'use client'
import { useState } from "react"
import { AccordionItem } from "./AccordionItem"

export const Accordion = () => {

  const matrix = [
    {
      term: 1,
      title: 'good at',
      answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
    },
    {
      term: 2,
      title: 'learning',
      answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
    },
    {
      term: 3,
      title: 'hobbies',
      answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
    },
    {
      term: 4,
      title: 'music',
      answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
    }
  ]

  const [data, setData] = useState([...matrix]);

  return (
    <div className="mt-4">
      {
        data && data.map((info, index) => (
          <AccordionItem 
            key={info.term} 
            title={info.title} 
            answer={info.answer} 
          />
        ))
      }
    </div>
  )
}