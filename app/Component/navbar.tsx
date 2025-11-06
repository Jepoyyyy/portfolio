import React from "react";
import Link from "next/link";
import { House,BriefcaseBusiness,CodeXml,ContactRound } from "lucide-react";
import { ModeToggle } from "./modetoggle";



export default function Navbar() {
    const iconSize = 15;
  return (
    <div
    className="p-4">
        <div
        className= "flex flex-row justify-center ">
        <ul className="flex space-x-6  py-2 px-6 shadow-xl/15 shadow-black border border-none dark:border-b-white rounded-2xl">
        <li className="flex items-center p-2 dark:hover:bg-gray-300 rounded-sm   ">
          <Link href="#hero">
          <House size={iconSize}/>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link href="#experience">
          <BriefcaseBusiness size={iconSize}/>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link href="#project">
          <CodeXml size={iconSize}/>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link href="#contact">
          <ContactRound size={iconSize}/>
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <ModeToggle />
        </li>       
      </ul>     
        </div>
    </div>
  );
}
