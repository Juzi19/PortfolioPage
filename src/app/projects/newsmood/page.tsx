"use client"
import Link from "next/link"
import { useTranslation } from "@/translations/provider"

export default function Newsmood(){
    const {translations} = useTranslation();
    return(
        <div className="pt-[10vh]">
            <div className="p-4 flex flex-col-reverse md:flex-row">
                <div className="md:w-1/2 w-full">
                    <video autoPlay muted loop playsInline className="rounded-xl">
                        <source src="/nm.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="md:w-1/2 w-full flex p-8 flex-col justify-center items-center text-center">
                    <h1 className="text-2xl font-bold">Newsmood</h1>
                    <p className="pt-4">{translations.nmDescription}</p>
                </div>
            </div>
            <hr className="m-4 h-1 bg-blue-900" />
            <div className="p-4 flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full flex p-8 flex-col justify-center items-center text-center">
                    <p className="pt-4">{translations.nmLearning}</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="/nm2.png" alt="CMS nofrog homepage" className="rounded-xl" />
                </div>
            </div>
            
            <hr className="m-4 h-1 bg-blue-900" />
            <div className="flex flex-row items-center justify-center mb-4">
                <Link href='https://github.com/Juzi19/CustomerManagementSystem' className="p-4 rounded-xl min-h-[15vh] flex justify-center items-center bg-gray-300 hover:opacity-80">
                    <img src="/github.svg" alt="github" className="w-[10vh]" />
                </Link>
            </div>
        </div>
    )
}