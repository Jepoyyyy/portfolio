import photo from "@/assets/EZA_1929.jpg";
import Image from "next/image";


export  function Hero() {
  return (
    <div 
    className="container w-full ">
      <div 
      className=" justify-center items-center md:items-start ">
        {/* Layer 1 */}
      <div className="">
            <h1>
              Hi, I'm Manuel Zefanya
            </h1>
            <p className="text-5xl textsize-lg font-bold ">
            --an enthusiactic software engineer 
           </p>
           <p className="text-xl">
            who loves growing and learning every day.
           </p>
      </div>
        {/* Layer 2 */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center mt-8">
          <div className="w-full md:w-1/3 flex order-2 md:order-1 justify-center mb-4 md:mb-0">
            <p>Crafting Technologies With Love {`<3`}</p>
          </div>

          <div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center">
            <Image
              src={photo}
              alt="Manuel Zefanya"
              width={900}
              height={500}
              className="object-cover transition-all duration-700 [clip-path:circle(35%)] ]"
            />
          </div>

          <div className="w-full md:w-1/3 order-3   flex justify-center mt-4 md:mt-0">
            <p>Contact Me</p>
          </div>
        </div>
      

        {/* <div className="flex flex-col w-full md:flex-row   justify-center">
          <div className="w-1/2 p-2">
            <div className=" flexmx-auto bg-amber-500 border">
              </div>      
          </div>
          <div className="w-1/2 p-2 bg-blue">
            <div className="">
              I’m a Fullstack Software Engineer driven by curiosity and innovation, love to build scalable and user-friendly apps across web and mobile platforms.</div>      
            <div className="">
                With the experience I’ve gained, I focus on creating smooth and reliable experiences that make technology more useful for everyone.
              </div>      
          </div>
          {/* <div className="w-1/3 flex flex-col justify-end p-2">
            <div className=" bg-gray py-4 w-full border ">
            </div>
            <div className=" bg-gray py-4 w-full border mt-2 ">
            </div>
            
          </div> *
        </div> */}
    </div>
    </div>
  );
}
