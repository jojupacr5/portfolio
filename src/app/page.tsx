'use client'
import { AboutMe, CustomSpan, AlsoMe, NextPage } from "@/components";
import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";

const logos = [
  {
    path: "/images/firebase.png",
    alt: "Firebase Logo",
    top: "-top-8",
    right: "right-44 md:right-64 xl:right-96",
    bottom: "",
  },
  {
    path: "/images/nextjs.png",
    alt: "NextJs Logo",
    top: "top-4 lg:top-16",
    right: "right-12 md:right-28 xl:right-48",
    bottom: "",
  },
  {
    path: "/images/ubuntu.png",
    alt: "Ubuntu Logo",
    top: "top-24 lg:top-48",
    right: "right-0 md:right-4 xl:right-8",
    bottom: "",
  },
  {
    path: "/images/react.png",
    alt: "React Logo",
    top: "",
    right: "right-2 md:right-2 lg:right-20",
    bottom: "bottom-4",
  },
  {
    path: "/images/javascript.png",
    alt: "JavaScript Logo",
    top: "",
    right: "right-24 md:right-32 lg:right-56",
    bottom: "-bottom-4 xl:-bottom-8",
  },
  {
    path: "/images/vue.png",
    alt: "Vue Logo",
    top: "",
    right: "right-48 md:right-64 lg:right-96",
    bottom: "-bottom-8 xl:-bottom-16",
  },
]

export default function Home() {

  return (
    <main className="grid grid-cols-12 gap-4 pt__height-cal sm:items-center">
      <div className="my-12 z-0 relative col-start-1 col-end-12 sm:my-0 sm:-mt-10 sm:col-start-2 sm:col-span-11 ">
        
        {
          logos.map( logo => (
            <div
              key={logo.path} 
              className={`hidden w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-32 xl:h-32 sm:block absolute -z-10 ${logo.top} ${logo.right} ${logo.bottom}`}>
              <Image
                src={logo.path}
                alt={logo.alt}
                fill
                className="w-full h-full top-0 left-0 object-contain"
              />
            </div>
          ))
        }
      

        <CustomSpan text="<html>" ml="-ml-2 md:-ml-3" />
        <CustomSpan text="<body>" mb="mb-6" />

        <div className="relative max-w-[350px] sm:max-w-[500px] md:max-w-[590px] lg:max-w-[780px]">
          <CustomSpan text="<h1>" />
          
          <h1 className={`${titleFont.className} leading-none text-6xl md:text-7xl lg:text-8xl text-secondary`}>
            Hello 
            <hr className="border-none mb-0 md:mb-4" /> 
            I&apos;m <span className="text-primary">Joseph</span> 
            <hr className="border-none mb-0 md:mb-4" />  
            Web Developer
          </h1>

          <CustomSpan text="</h1>" absolute="absolute -bottom-2 -right-5" />
        </div> 
        
        <div className="relative max-w-[320px] md:max-w-[355px] mt-8 mb-12">
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

      <div className="block sm:hidden mt-12 mb-24 z-0 col-start-1 col-end-13 sm:my-0 sm:-mt-10 ">
        <AboutMe />   
        <AlsoMe />
      </div>


      <NextPage />
    </main>
  );
}
