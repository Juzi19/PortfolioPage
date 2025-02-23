"use client"

import Link from "next/link"
import { useTranslation } from "@/translations/provider"
export default function Portfolio(){
    const {translations} = useTranslation();
    return(
        <div>
            <div className="pt-[12vh] flex min-h-[84vh] items-center flex-col">
            <div className="md:w-1/2  w-full p-4 text-center">
                <h1 className="text-2xl font-bold pb-4">{translations.mpp}</h1>
                <p>
                    {translations.portdesc}
                </p>
            </div>
            <div className="md:w-1/2  w-full  p-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold">{translations.techs}</h2>
                <div className="pt-6">
                    <img src="/next.png" alt="Next" className="h-[15vh]"/>
                    <img src="/redis.png" alt="Redis" className="h-[15vh]"/>
                    <img src="/tailwind.png" alt="tailwind" className="h-[15vh]"/>
                </div>
            </div>
            
        <hr className="my-4 h-1 w-full bg-blue-900" />

        </div>
            <div className="flex flex-row items-center justify-center mb-4">
            <Link href='https://github.com/Juzi19/PortfolioPage' className="p-4 rounded-xl min-h-[15vh] flex justify-center items-center bg-gray-300 hover:opacity-80">
            <img src="/github.svg" alt="github" className="w-[10vh]"/>
            </Link>
            
        </div>
        </div>

        
    )
}