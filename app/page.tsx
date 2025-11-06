  import Image from "next/image";
  import { Hero } from "./Component/Hero/hero";
  import { Project } from "./Component/Project/project";
  import { Experience } from "./Component/Experience/exprience";
  import { Footer } from "./Component/footer";
  


  export default function Home() {
  return (
    <div className="w-full  ">
      <div className=" dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <Hero />
        <Experience />
        <Project />
        <Footer />
      </div>
    </div>
  );
}
