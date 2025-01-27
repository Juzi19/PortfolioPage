"use client"
import Link from "next/link"
import { useTranslation } from "@/translations/provider"
import IconsSlideshow from "@/components/icon-slideshow"
export default function nofrogHomepage(){
    const icons = [['/react.png', 'react'],['/html.png','html'], ['/css.png', 'css'],["/node.png", 'node'], ['/mongo.png', 'mongo']]
    const {translations, changeLanguage} = useTranslation();
    return(
        <div className="pt-[10vh]">
            <div className="p-4 flex md:flex-row flex-col">
                <div className="md:w-1/2 w-full">
                    <img src="/nofrog.png" alt="CMS nofrog homepage" className="rounded-xl"/>
                </div>
                <div className="md:w-1/2 w-full flex p-8 flex-col justify-center items-center text-center">
                    <h1 className="text-2xl font-bold">{translations.nofrogTitle}</h1>
                    <p className="pt-4">{translations.nofrogDescription}</p>
                </div>
            </div>
            <hr className="m-4 h-1 bg-blue-900" />
            <div className="p-4 flex flex-col-reverse md:flex-row">
                <div className="md:w-1/2 w-full flex p-8 flex-col justify-center items-center text-center">
                    <p className="pt-4">{translations.nofrogLearning}</p>
                </div>
                <div className="md:w-1/2 w-full">
                    <img src="/nofrog-2.png" alt="CMS nofrog homepage" className="rounded-xl"/>
                </div>
            </div>
            <hr className="m-4 h-1 bg-blue-900" />
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold p-2">{translations.nofrogTechTitle}</h2>
                <div className="my-4 flex flex-row w-[86vw] h-[12vw] items-center">
                    <IconsSlideshow icons={icons} />
                </div>
            </div>
            <hr className="m-4 h-1 bg-blue-900" />
            <div className="flex flex-row items-center justify-center mb-4">
                <Link href='https://github.com' className="p-4 rounded-xl min-h-[15vh] flex justify-center items-center bg-gray-300 hover:opacity-80">
                    <img src="/github.svg" alt="github" className="w-[10vh]"/>
                </Link>
                <Link href='https://link-to-the-deployment.com' className="p-4 rounded-xl min-h-[15vh] ml-2 flex justify-center items-center bg-blue-900 text-white font-bold hover:opacity-80">
                    {translations.exploreApp}
                </Link>
            </div>
        </div>
    )
}