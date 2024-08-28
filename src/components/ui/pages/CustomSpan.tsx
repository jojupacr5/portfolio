import { titleFont } from "@/config/fonts"

interface Props {
    text: string;
    ml?: string;
    mb?: string;
    absolute?: string;
    variation?: boolean;
    subtitle?: string;
}

export const CustomSpan = ({ text, ml, mb, absolute, variation, subtitle }: Props) => {
  return (
    <div className={`flex flex-col ${mb ? mb : ''} ${absolute ? absolute : ''}`}>
      <span className={`${titleFont.className} text-sm md:text-md text-black-secondary ${ml ? ml : ''}`}>{ text }</span>
      {
        variation && (<span className="text-primary ml-2">{subtitle}</span>)
      }
      
    </div>
  )
}