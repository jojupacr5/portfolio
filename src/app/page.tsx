import { CustomSpan } from "@/components";
import { titleFont } from "@/config/fonts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-cols-12 gap-4">
      <div className="col-start-2 col-span-10 pt-9">
        
        <CustomSpan text="<html>" ml="-ml-3" />
        <CustomSpan text="<body>" mb="mb-6" />

        <div className="relative max-w-[800px]">
          <CustomSpan text="<h1>" />
          <h1 className={`${titleFont.className} text-8xl text-secondary`}>
            Hello 
            <hr className="border-none mb-4" /> 
            I&apos;m <span className="text-primary">Joseph</span> 
            <hr className="border-none mb-4" />  
            Web Developer
          </h1>
          <div className="absolute -bottom-2 -right-5">
            <CustomSpan text="</h1>" />
          </div>

        </div> 
        <div className="relative max-w-[360px] mt-4 mb-8">
          <CustomSpan text="<p>" />
          <p className="text-xl text-secondary">Especialized in <span className="text-primary">Frontend</span> development</p>
          <div className="absolute -bottom-2 -right-5">
            <CustomSpan text="</p>" />
          </div>
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
