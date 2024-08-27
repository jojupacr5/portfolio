import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"

export const Socials = () => {
  return (
    <div className="absolute bottom-4 left-4 flex-col justify-center items-center hidden sm:flex">
      <div className="w-1 bg-secondary h-12 mb-4"></div>
      <a href="/" target="_blank" className="mb-4">
        <FaGithub className="w-6 h-6 fill-secondary hover:fill-primary transition-all" />
      </a>
      <a href="/" target="_blank" className="mb-4">
        <FaLinkedin className="w-6 h-6 fill-secondary hover:fill-primary transition-all" />
      </a>
      <a href="/" target="_blank">
        <FaInstagram className="w-6 h-6 fill-secondary hover:fill-primary transition-all" />
      </a>
    </div>
  )
}