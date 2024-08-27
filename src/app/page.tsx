import { titleFont } from "@/config/fonts";


export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className={`${titleFont.className} text-3xl`}>Main Page</h1> 
    </main>
  );
}
