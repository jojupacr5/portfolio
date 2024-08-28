import { CustomSpan } from "@/components";
import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

const logos = [
  {
    path: "/images/firebase.png",
    alt: "Firebase Logo",
    top: "top-12",
    right: "right-64",
    bottom: "",
    width: 80,
    height: 80,
  },
  {
    path: "/images/nextjs.png",
    alt: "NextJs Logo",
    top: "top-48",
    right: "right-20",
    bottom: "",
    width: 140,
    height: 80,
  },
  {
    path: "/images/ubuntu.png",
    alt: "Ubuntu Logo",
    top: "top-64",
    right: "right-4",
    bottom: "",
    width: 100,
    height: 100,
  },
  {
    path: "/images/react.png",
    alt: "React Logo",
    top: "",
    right: "right-20",
    bottom: "bottom-4",
    width: 100,
    height: 100,
  },
  {
    path: "/images/javascript.png",
    alt: "JavaScript Logo",
    top: "",
    right: "right-56",
    bottom: "-bottom-4",
    width: 100,
    height: 100,
  },
  {
    path: "/images/vue.png",
    alt: "Vue Logo",
    top: "",
    right: "right-96",
    bottom: "-bottom-8",
    width: 90,
    height: 90,
  },
]

export default function Home() {
  return (
    <main className="md:pt__height-cal grid grid-cols-12 gap-4 md:items-center">
      <div className="mt-12 mb-12 md:mb-0 md:-mt-10 col-start-1 col-end-12 md:col-start-2 md:col-span-11 z-0 relative">
        {
          logos.map( logo => (
            <div
              key={logo.path} 
              className={`hidden md:block absolute -z-10 ${logo.top} ${logo.right} ${logo.bottom}`}>
              <Image
                src={logo.path}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))
        }
        <CustomSpan text="<html>" ml="-ml-2 md:-ml-3" />
        <CustomSpan text="<body>" mb="mb-6" />

        <div className="relative max-w-[800px]">
          <CustomSpan text="<h1>" />
          <h1 className={`${titleFont.className} leading-none text-6xl md:text-8xl text-secondary`}>
            Hello 
            <hr className="border-none mb-0 md:mb-4" /> 
            I&apos;m <span className="text-primary">Joseph</span> 
            <hr className="border-none mb-0 md:mb-4" />  
            Web Developer
          </h1>
          <CustomSpan text="</h1>" absolute="absolute -bottom-2 -right-5" />

        </div> 
        <div className="relative max-w-[360px] mt-8 mb-12">
          <CustomSpan text="<p>" />
          <p className="text-lg md:text-xl text-secondary">Especialized in <span className="text-primary">Frontend</span> development</p>
          <CustomSpan text="</p>" absolute="absolute -bottom-2 -right-5" /> 
        </div> 
        
        <div>
          <Link className="px-6 py-2 mr-5 border border-secondary text-secondary hover:border-primary hover:bg-white-secondary transition-all" href="/projects/1">
            Projects
          </Link>
          <button className="py-0 px-2 border-b-[1px] border-black-secondary text-secondary hover:border-primary">
            Download CV
          </button>
        </div>
      </div>
    </main>
  );
}
