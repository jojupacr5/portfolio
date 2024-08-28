import { titleFont } from "@/config/fonts"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

export const NextPage = () => {
  return (
    <Link href="/about" className="absolute bottom-4 right-4 flex flex-col items-end">
      <BsArrowRight className="w-11 h-11 fill-secondary -mb-2"/>
      <span  className={`${titleFont. className} text-xl text-secondary `}>
        about me
      </span>
    </Link>
  )
}