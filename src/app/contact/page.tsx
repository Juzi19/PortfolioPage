"use client"
import { useTranslation } from "@/translations/provider"
import Head from "next/head"
import Contactform from "@/components/Contactform"
import Connect from "@/components/connect"
export default function Contact(){
    const {translations, changeLanguage} = useTranslation();
    return(
        <div className="text-white  pt-[12vh]">
            <Head>
                <title>Contact</title>
                <meta name="description" content="Contact me either via contact form or via email" />
                <meta name="keywords" content="contact,Justus, web development, Fullstack, Munich, web developer" />
                <meta property="og:title" content="Contact page" />
                <meta property="og:description" content="Welcome to my Contact page." />
                <meta name="robots" content="index, follow" />
            </Head>
            <div className="relative flex w-full bg-white z-40 mt-4">
                <div className="m-4 flex items-center justify-center bg-white w-full ">
                <div className="flex justify-center items-center flex-col text-center relative rounded-xl min-h-[30vh] w-full  bg-[#ffa500]">
                    <div className="p-3 flex flex-col">
                        <p><a href="mailto: justus.webdev@gmail.com" className="p-1 hover:underline">justus.webdev@gmail.com</a>📧</p>
                        <p><a href="tel:+4915121357649" className="hover:underline p-1">0049 1512 1357649</a>📞</p>
                    </div>
                    <div className="w-[30vh] bg-white rounded-xl">
                        <Connect></Connect>
                    </div>
                    <p className="w-full font-bold p-3">{translations.ccc}</p>
                </div>
                </div>
            </div>
                
                
            <div className="relative flex visibletransition4 w-full bg-white z-40 ">
                <Contactform></Contactform>
            </div>
        </div>
    )
}