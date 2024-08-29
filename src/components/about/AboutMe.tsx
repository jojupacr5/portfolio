import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { CustomSpan } from "../ui/pages/CustomSpan"
import { titleFont } from "@/config/fonts"

export const AboutMe = () => {
  return (
    <>
      <CustomSpan text="josephpaucar@pc:~$" ml="-ml-2 md:-ml-3" variation={true} subtitle="nano about-me.txt"/>

      <p className="text-secondary text-lg mt-4 mb-2">
        Soy un desarrollador de aplicaciones web residiendo en Lima, Perú, trabajo de forma independiente y estoy abierto a ofertas laborales. 
      </p>
      <p className="text-secondary text-lg mb-4">
        Me apasiona todo el proceso de creación de productos digitales y con el uso de nuevas tecnologias, mis conocimientos en desarrollo, diseño y ux, ayudo a mis clientes a dar vida a sus ideas o mejorar sus productos digitale.
      </p>
    </>
  )
}