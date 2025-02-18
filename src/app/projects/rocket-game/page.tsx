"use client"
import { useTranslation } from "@/translations/provider"
import Link from "next/link";
import dynamic from "next/dynamic";

const Highscore = dynamic(() => import("./@highscore/page"), {
  ssr: false, 
});

export default function RocketGame(){
    const {translations} = useTranslation();
    return(
        <div className="pt-[12vh] flex flex-col">
            <h1 className="text-center text-2xl font-bold p-4 pb-6">{translations.rg}</h1>
            <div className="p-4 flex md:flex-row flex-col">
                <div className="md:w-1/2  w-full">
                <video autoPlay muted loop className="rounded-xl">
                <source src="/rocket-game.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                </video>
                </div>
                <div className="md:w-1/2  w-full flex p-4 pt-2 flex-col justify-center items-center text-center">
                    <p className="p-4">{translations.rgdesc}</p>
                </div>
            </div>
            <hr className="m-4 h-1 bg-blue-900" />
            <div className="flex flex-col md:flex-row w-full items-center p-4">
                <p className="md:w-1/2  w-full text-center p-4">{translations.rgdesc2}</p>
                <div className="md:w-1/2  w-full flex flex-row justify-center md:justify-start md:flex-col items-center h-[15vh] md:h-[60vh]">
                    <img src="/html.png" alt="html" className="md:h-1/5 h-2/3 p-1"/>
                    <img src="/css.png" alt="css" className="md:h-1/5 h-2/3 p-1"/>
                    <img src="/js.png" alt="javascript" className="md:h-1/5 h-2/3 p-1"/>
                    <img src="/node.png" alt="node" className="md:h-1/5 h-2/3 p-1"/>
                    <img src="/redis.png" alt="redis" className="md:h-1/5 h-2/3 p-1"/>
                </div>
            </div>
            <hr className="m-4 h-1 bg-blue-900" />
                <Highscore></Highscore>
               <small className="text-center pt-1">{translations.note}</small>
               <div className="flex pt-5 flex-row items-center justify-center mb-4">
                <Link href='https://github.com' className="p-4 rounded-xl min-h-[15vh] flex justify-center items-center bg-gray-300 hover:opacity-80">
                <img src="/github.svg" alt="github" className="w-[10vh]"/>
                </Link>
                <Link href='https://rocket-game-ha04.onrender.com' className="p-4 rounded-xl min-h-[15vh] ml-2 flex justify-center items-center bg-blue-900 text-white font-bold hover:opacity-80">
                {translations.exploreApp}
                </Link>
            </div>
        </div>
    )
}