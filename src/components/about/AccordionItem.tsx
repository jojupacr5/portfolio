import { titleFont } from '@/config/fonts';
import { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

export const AccordionItem = ({
  title, answer
}) => {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsActive(!isActive)}
        className="flex items-center justify-between w-full p-4 text-secondary bg-primary gap-3"
      >
        <span className={`${titleFont.className} text-md hover:text-white-primary`}>{ title }</span>
        {
          isActive
          ? <IoMdArrowDropup className="w-6 h-6 hover:text-white-primary" />
          : <IoMdArrowDropdown className="w-6 h-6 hover:text-white-primary" />
        }
      </button>
      
      { isActive && (
        <div className="p-5 border border-t-0 border-secondary dark:border-white-secondary dark:bg-secondary">
          <p className="mb-2 text-gray-500 dark:text-white-primary">{answer}</p>
        </div>
        ) 
      }
      
        
      
    </>
)
}
