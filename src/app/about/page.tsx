"use client"

import Link from "next/link"
import Milestone from "@/components/Milestone"
import Head from "next/head"
import Connect from "@/components/connect"
import { useTranslation } from "@/translations/provider"

export default function About(){
    const {translations} = useTranslation()
    return(
        <div className="relative ">
            <Head>
                <title>About me</title>
                <meta name="description" content="The about page lists my journey to become a fullstack developer and tells you more about my person" />
                <meta name="keywords" content="about, Justus, web development, Fullstack, Munich, web developer" />
                <meta property="og:title" content="Aboutme page" />
                <meta property="og:description" content="Welcome to my Aboutme page." />
                <meta name="robots" content="index, follow" />
            </Head>
            <div className="relative pt-[10vh] bg-white z-40">
                {/*Line animation smooth */}
            </div>
            <div className="flex w-full flex-col relative z-40 bg-white">
                <div className="h-[12vh] flex w-full justify-center items-center">
                <h1 className="text-3xl font-bold">{translations.am}</h1>
                </div>
            </div>
            <div className="p-4 flex md:flex-row justify-center items-center relative z-40 bg-white flex-col">
                <div className="md:w-1/2 w-full visibletransition4  flex justify-center items-center h-full p-6 text-center py-6 rounded-xl bg-gray-300 text-black">
                    <p>{translations.introduction}</p>
                </div>
                <hr className="md:hidden my-4 bg-blue-900 relative z-40  w-full h-1"/>
                <div className="md:w-1/2 w-full flex items-center flex-col justify-center">
                    <img src="/Justus.jpg" className="rounded-xl w-2/3 sm:w-[42%]" alt="Justus" />
                    <p className="pt-2">{translations.location}</p>
                    <p>{translations.profession}</p>
                </div>
            </div>
            <div className="px-4 flex flex-row justify-center items-center relative ">
                <div className="relative w-full flex h-full flex-col">
                    <div>
                        <h3 className="relative z-40 bg-white py-4 w-full flex font-bold h-[10vh]">{translations.mj}</h3>
                    </div>
                    <div className="relative flex h-full w-full">
                    <div className="absolute flex h-full">
                        <div className="relative top-0 flex h-full w-fit">
                            {/* Shines trough to see the background(fixed) */}
                            <div className="absolute top-0 w-[2px] flex z-10 h-full bg-gray-300">
                                {/*Timespan */}
                            </div>
                            
                            <div className="fixed top-0 w-[2px] flex z-20 h-[50vh] bg-blue-900">
                            </div>
                        </div>
                    </div>
                    
                    {/*Text div for descripbing the timeline*/}
                    <div id="milestones" className="relative flex flex-col pt-2 pl-[5vw]">
                        <div className="flex py-4">
                            <Milestone props={{
                                headline:translations.jan24,
                                text: translations.jan24t,
                                imageURL:['/python.png']
                            }}></Milestone>
                        </div>
                        <div className="flex py-4">
                            <Milestone props={{
                                headline: translations.mar24,
                                text: translations.mar24t,
                                imageURL: ['/html.png', 'css.png']
                            }}></Milestone>
                        </div>
                        <div className="flex py-4">
                            <Milestone props={{
                                headline: translations.apr24,
                                text: translations.apr24t,
                                imageURL: ['/js.png']
                            }}></Milestone>
                        </div>
                        <div className="flex py-4">
                            <Milestone props={{
                                headline: translations.jun24,
                                text: translations.jun24t,
                                imageURL: ['/react.png', 'tailwind.png']
                            }}></Milestone>
                        </div>
                        <div className="flex py-4">
                            <Milestone props={{
                                headline: translations.aug24,
                                text: translations.aug24t,
                                imageURL: ['/node.png', 'mongo.png']
                            }}></Milestone>
                        </div>
                        <div className="flex py-4">
                            <Milestone props={{
                                headline: translations.oct24,
                                text: translations.oct24t,
                                imageURL: ['/django.png']
                            }}></Milestone>
                        </div>
                        <div className="flex py-4">
                            <Milestone props={{
                                headline: translations.dec24,
                                text: translations.dec24t,
                                imageURL: []
                            }}></Milestone>
                        </div>
                        <div className="flex py-4">
                            <Milestone props={{
                                headline: translations.jan25,
                                text: translations.jan25t,
                                imageURL: ['/next.png', 'redis.png', 'docker.png']
                            }}></Milestone>
                        </div>
                        <div className="flex py-4">
                            <Milestone props={{
                                headline: translations.may25,
                                text: translations.may25t,
                                imageURL: ['/langchain.webp', '/openai.svg']
                            }}></Milestone>
                        </div>
                        <div className="flex py-4">
                            <Milestone props={{
                                headline: translations.oct25,
                                text: translations.oct25t,
                                imageURL: []
                            }}></Milestone>
                        </div>

                    </div>
                    </div>
                    
                    
                </div>
            </div>


            <div className="relative flex w-full pt-8 flex-col items-center bg-white z-30">
                <div className="relative w-[95%] border-t-4 border-blue-900 flex pt-6">
                    <div className="w-full flex bg-gray-300 p-4 rounded-xl text-center">
                        <p>{translations.specialization}</p>
                    </div>
                </div>
                <div className="relative w-[95%] flex pt-6">
                    <div className="w-full flex bg-gray-300 p-4 rounded-xl text-center">
                        <p>{translations.personalProjects} <Link href='/projects' className='font-bold'>{translations.ppp}</Link>{translations.explore}</p>
                    </div>
                </div>
                <img className="w-[30vh] py-8" src="target.png" alt="Target and arrow" />
                <div className="relative w-[95%] flex pt-2 pb-6">
                    <div className="w-full flex bg-blue-900 text-white font-bold p-4 rounded-xl text-center">
                        <p>{translations.goal}</p>
                    </div>
                </div>

                <div className="w-[30vh] flex relative z-30 bg-white mb-4 flex-col">
                    <Connect></Connect>

                    <Link href='/contact' className="w-full bg-blue-900 p-4 rounded-xl text-center text-white font-bold my-4 hover:opacity-80">
                        {translations.contact}
                    </Link>
                </div>
            </div>

        </div>
    )
}