import { AboutMe, AlsoMe } from "@/components";

export default function AboutPage() {
  return (
    <main className="grid grid-cols-12 gap-4 pt__height-cal sm:items-center">
      <div className="col-start-2 col-end-12">
        <AboutMe />   
        <AlsoMe />
      </div>
    </main>
  )
}