"use client"
import Link from "next/link"
import { useTranslation } from "@/translations/provider"

export default function Academy_App(){
    const {translations} = useTranslation();
    return(
        <div className="pt-[10vh]">
            <div className="p-4 flex flex-col-reverse md:flex-row">
                <div className="md:w-1/2 w-full">
                    <img src="/aa_1.png" alt="CMS nofrog homepage" className="rounded-xl w-full" />
                </div>
                <div className="md:w-1/2 w-full flex p-8 flex-col justify-center items-center text-center">
                    <h1 className="text-2xl font-bold">{translations.aatitle}</h1>
                    <p className="pt-4">{translations.aaDescription}</p>
                </div>
            </div>
            <hr className="m-4 h-1 bg-blue-900" />
            <div className="p-4 flex flex-col md:flex-row">
                <div className="md:w-1/2 w-full flex p-8 flex-col justify-center items-center text-center">
                    <p className="pt-4">{translations.aaLearning}</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="/aa_2.png" alt="CMS nofrog homepage" className="rounded-xl" />
                </div>
            </div>
            <hr className="m-4 h-1 bg-blue-900" />
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold p-2 text-center">{translations.aaYourTurnTitle}</h2>
                <p className="text-center">{translations.aaCardNumber}</p>
                <p className="text-center">{translations.aaInfo}</p>
            </div>
            <hr className="m-4 h-1 bg-blue-900" />
            <div className="flex flex-row items-center justify-center mb-4">
                <Link href='https://github.com/Juzi19/Academy_App' className="p-4 rounded-xl min-h-[15vh] flex justify-center items-center bg-gray-300 hover:opacity-80">
                    <img src="/github.svg" alt="github" className="w-[10vh]" />
                </Link>
                <Link href='https://academyapp-frontend-production.up.railway.app/' className="p-4 rounded-xl min-h-[15vh] ml-2 flex justify-center items-center bg-blue-900 text-white font-bold hover:opacity-80">
                    {translations.exploreApp}
                </Link>
            </div>
        </div>
    )
}