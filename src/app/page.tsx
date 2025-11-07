"use client"

import dynamic from "next/dynamic";
import Head from 'next/head';
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "@/translations/provider";

const CircleAnimation = dynamic(()=>import("../components/CircleAnimation"),{
  ssr: false,
  loading: ()=> <div className="relative bg-white text-black text-2xl  w-full h-[100vh] z-20"></div>
})

export default function Home() {
  const [projectsvisible, setProjectsVisible] = useState(false);
  const [aboutvisible, setAboutVisible] = useState(false);
  const [contactvisible, setContactVisible] = useState(false);

  const {translations} = useTranslation();

  return (
    <div>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Welcome to my portfolio website. Explore my work and projects." />
        <meta name="keywords" content="portfolio, web development, Fullstack, Munich, web developer" />
        <meta property="og:title" content="Homepage" />
        <meta property="og:description" content="Welcome to my homepage." />
        <meta name="robots" content="index, follow" />
      </Head>
      <div>
        <CircleAnimation></CircleAnimation>
      </div>
      <div className="relative w-full z-20 bg-white p-4 pt-4">
        <div className="jagged-line text-blue-900"></div>
        <div className="w-full flex min-h-[20vh] flex-row items-center justify-center">
          <h2 className="flex text-3xl h-[80%] items-center justify-end w-1/2 text-right pr-4 border-r-4 border-orange-300">{translations.wn}</h2>
          <p className="w-1/2 p-4">{translations.coll}</p>
        </div>
        <div className="grid gap-4 grid-rows-3 grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 w-full h-[80vh] sm:h-[50vh] text-2xl font-bold text-white mt-8">
          <Link href="/projects" className="relative py-[10vh] px-2 row-span-3 sm:col-span-4 standardlink bg-blue-900 " onMouseOver={()=>setProjectsVisible(true)} onMouseOut={()=> setProjectsVisible(false)}>
            <p className={`${projectsvisible?'invisible':'visibletransition2'}`}>{translations.projects}</p>
            <img src="/project.png" className={`absolute w-[20vh] ${projectsvisible?'visibletransition2':'invisible'}`} alt="Justu's projects icon" />
            <p className={`absolute bottom-[6%] right-4 ${projectsvisible?'visibletransition2':'invisible'}`}>⟩</p>
          </Link>
          <Link href="/about" className="relative py-[10vh] px-2 flex row-span-2 standardlink bg-[#ffa500]" onMouseOver={()=>setAboutVisible(true)} onMouseOut={()=> setAboutVisible(false)}>
            <p className={`${aboutvisible?'invisible':'visibletransition2'}`}>{translations.about}</p>
            <img src="/qm.png" className={`absolute w-[18vh] ${aboutvisible?'visibletransition2':'invisible'}`} alt="Justu's projects icon" />
            <p className={`absolute bottom-[6%] right-4 ${aboutvisible?'visibletransition2':'invisible'}`}>⟩</p>
          </Link>
          <Link href="contact" className="relative py-[10vh] px-2 flex row-span-3 sm:row-span-2 sm:col-span-3 standardlink bg-black" onMouseOver={()=>setContactVisible(true)} onMouseOut={()=> setContactVisible(false)}>
            <p className={`${contactvisible?'invisible':'visibletransition2'} w-full z-30 flex h-full items-center justify-center`}>{translations.contact}</p>
            <img src="/email.png" className={`absolute w-[18vh] ${contactvisible?'visibletransition2':'invisible'}`} alt="Justu's projects icon" />
            <p className={`absolute bottom-[6%] right-4 ${contactvisible?'visibletransition2':'invisible'}`}>⟩</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
