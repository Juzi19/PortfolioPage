"use client"
import Projectcard from "@/components/projectcard"
import Line from "@/components/line"
import { useTranslation } from "@/translations/provider"
import Head from "next/head"

export default function Projects(){
    const {translations} = useTranslation();
    const project1 = {
        headline: translations.project1_headline,
        text: translations.project1_text,
        imageURL: '/frog.webp',
        linkURL: '/projects/cms-nofrog',
        link: 'More',
        backgroundColor: 'bg-white'
      };
      
      const project2 = {
        headline: translations.project2_headline,
        text: translations.project2_text,
        imageURL: '/home.png',
        linkURL: '/projects/nofrog-homepage',
        link: 'More',
        backgroundColor: 'bg-white'
      };
      
      const project3 = {
        headline: translations.project3_headline,
        text: translations.project3_text,
        imageURL: '/rocket.png',
        linkURL: '/projects/rocket-game',
        link: 'More',
        backgroundColor: 'bg-white'
      };
      
      const project4 = {
        headline: translations.project4_headline,
        text: translations.project4_text,
        imageURL: '/pf.png',
        linkURL: '/projects/portfolio',
        link: 'More',
        backgroundColor: 'bg-white'
      };

      const project5 = {
        headline: translations.aa_headline,
        text: translations.aa_text,
        imageURL: '/aa.avif',
        linkURL: '/projects/academy-app',
        link: 'More',
        backgroundColor: 'bg-white'
      };
      
    return(
        <div className="pt-[10vh] flex items-center justify-center flex-col">
            <Head>
                <title>Projects</title>
                <meta name="description" content="I listed my projects here, to give you an overview about my last builts" />
                <meta name="keywords" content="Projects, portfolio, webdev,Justus, web development, Fullstack, Munich, web developer" />
                <meta property="og:title" content="Projects page" />
                <meta property="og:description" content="Welcome to my Projects page." />
                <meta name="robots" content="index, follow" />
            </Head>
            <div>
                <h1 className="text-3xl font-bold p-6">Projects</h1>
            </div>
            <div className="pb-2 w-full">
                <p className="text-center">{translations.ht}</p>
            </div>
            <Line></Line>
            <div className="visibletransition4">
                <Projectcard props={project5}></Projectcard>
            </div>
            <Line></Line>
            <div className="visibletransition4">
                <Projectcard props={project3}></Projectcard>
            </div>
            <Line></Line>
            <div className="visibletransition4">
                <Projectcard props={project2}></Projectcard>
            </div>
            <Line></Line>
            <div className="visibletransition4 mb-6">
                <Projectcard props={project4}></Projectcard>
            </div>
            <Line></Line>
            <div className="visibletransition4">
                <Projectcard props={project1}></Projectcard>
            </div>

        </div>
    )
}