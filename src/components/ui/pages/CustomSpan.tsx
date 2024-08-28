import { titleFont } from "@/config/fonts"

interface Props {
    text: string;
    ml?: string;
    mb?: string; 
}

export const CustomSpan = ({ text, ml, mb}: Props) => {
  return (
    <div className={`flex flex-col ${mb}`}>
      <span className={`${titleFont.className} text-black-secondary ${ml}`}>{ text }</span>
    </div>
  )
}