"use client"

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/translations/provider";

import IconsSlideshow from "./icon-slideshow";

export default function CircleAnimation(){
    const icons1 = [['/html.png', 'HTML'], ['/css.png', 'css'],['tailwind.png', 'Tailwind'],['/js.png', 'JavaScript'],['/ts.png', 'Typescript'], ['/react.png', 'React'],['/next.png', 'Next']]
    const icons2 = [['/node.png', 'Node JS'], ['/django.png', 'Django'],['python.png', 'Python'], ['/mongo.png', 'Mongo'], ['/mysql.png', 'MySQL'], ['/redis.png', 'Redis'], ['/docker.png', 'Docker']]

    const canvasRef = useRef<HTMLCanvasElement | null>(null); // Erstelle eine Referenz auf das Canvas
    let width = window.innerWidth;
    let height = window.innerHeight;
    let radius = 0;
    
    let canvas;
    let ctx:any;

    let maxsize = 0;

    const [justus_visible, setJustus_visible] = useState(false)
    const [contact_visible, setContactVisible] = useState(false);
    const [whitebackground, setWhiteBackground] = useState(false);
    const [start, setStart] = useState(true);
    const {translations} = useTranslation();

    useEffect(() => {
        width = window.innerWidth;
        height = window.innerHeight;

        const checkdisplay =()=>{
            if(width>height){
                maxsize=width;
            }
            else{
                maxsize=height;
            }
        }

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
        };
        
        const handleScroll = () => {
            radius = document.documentElement.scrollTop;
            drawCircle();
            if(document.documentElement.scrollTop > 0){
                setStart(false);
            }

            if(document.documentElement.scrollTop > 5*height){
                setWhiteBackground(true);
            }
            else{
                setWhiteBackground(false);
            }
            if (document.documentElement.scrollTop > 3.25*height){
                setContactVisible(true);

            }
            else{
                setContactVisible(false)
            }
        }

        const drawCircle = ()=>{
            if (ctx) {
                // Zeichne etwas auf dem Canvas
                ctx.beginPath();
                ctx.clearRect(width, height, -width, -height)
                ctx.fillStyle = 'orange';  // Farbe für das Füllen
                ctx.arc(width, height, radius,0,2*Math.PI);
                ctx.fill();
                if(radius>(maxsize*1.31)){
                    radius=maxsize*1.31
                    setJustus_visible(true)
                }
                else{
                    setJustus_visible(false)
                }
            }
        }


        if (canvasRef.current) {
            canvas = canvasRef.current;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight*0.9;
            ctx = canvas.getContext('2d'); // Hol dir den 2D-Kontext
            drawCircle();
        }


        checkdisplay();
        
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);          

        
        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleResize);
          };
  }, [window.innerHeight, window.innerWidth]);
    return(
        <div>
            <h2  className={`fixed z-30 flex items-center justify-center w-[100vw] top-[15vh] text-2xl font-bold text-black text-center p-2  ${start ? 'visible':'invisibletransition2'}`}>{translations.scrolldown}</h2>

            <div className="fixed top-[10vh] w-full h-[90vh]">
                <canvas ref={canvasRef} className="w-full h-[90vh]"></canvas>
                <div className="fixed sm:top-[28vh] left-[10vw] text-white sm:w-1/2 w-[80%] top-[14vh]">
                    <h1 className="text-4xl font-bold">{translations.welcome}</h1>
                    <p className="mt-2">{translations.starttext}</p>
                </div>
                <div className="fixed flex justify-center sm:w-1/3 w-full top-[56vh]  sm:top-[60vh] md:top-[50vh] sm:right-[6vw]">
                <img src="/Justus.jpg" alt="Justus Zimmermann" className={`md:w-[30vh] sm:w-[25vh] w-[28vh] rounded-2xl ${justus_visible ? 'visibletransition' : 'invisibletransition'}`}/>
                </div>
            </div>
            <div className="w-full h-[415vh]">
                {/*Space to scroll down */}
            </div>
            <div className="relative z-10 w-full  bg-white">
                <div className="flex py-[12vh] w-full h-1/3 text-4xl font-bold items-center">
                    <h1 className="ml-[9%] border-l-4 pl-4 border-x-orange-300">{translations.getstarted}</h1>
                </div>
                <hr className="bg-blue-800 h-1 m-4"/>
                <div className="flex w-full sm:flex-row flex-col sm:h-[50vh] items-center pb-4 sm:pb-0">
                    <div className="flex items-center w-full sm:justify-normal justify-center sm:w-[50vw] h-full  sm:border-r-4 border-orange-300">
                        <h2 className="text-3xl text-center sm:ml-[5%] sm:py-[14vh] py-[2vh]">Frontend</h2>
                    </div>
                    <div className="flex flex-col justify-center px-[5%] w-full sm:w-[50%] text-center h-full">
                        <p>{translations.frontend}</p>
                        <div className="ml-[6vw] mt-4 flex sm:w-[28vw] sm:h-[4vw] w-[84vw] h-[12vw]">
                            {/*1/7 resolution */}
                            <IconsSlideshow icons={icons1}></IconsSlideshow>
                        </div>
                    </div>
                </div>
                <hr className="bg-blue-800 h-1 m-4"/>
                <div className="flex w-full sm:flex-row flex-col-reverse sm:h-[50vh] items-center pb-4 sm:pb-0">
                    <div className="flex flex-col justify-center px-[5%] w-full sm:w-[50%] text-center h-full sm:border-r-4 border-orange-300">
                        <p>{translations.backend}</p>
                        <div className="ml-[6vw] mt-4 flex sm:w-[28vw] sm:h-[4vw] w-[84vw] h-[12vw]">
                            <IconsSlideshow icons={icons2}></IconsSlideshow>
                        </div>
                    </div>
                    <div className="flex items-center w-full sm:justify-normal justify-center sm:w-[50vw] h-full ">
                        <h2 className="text-3xl text-center  sm:ml-auto sm:mr-[5%] sm:py-[14vh] py-[2vh]">Backend</h2>
                    </div>
                </div>
                <div id="whiteblank" className={`bg-white top-0 fixed w-full h-full z-30 ${whitebackground ? 'visibletransition2' : 'invisibletransition3'} `}>
                </div>
                
            </div>
            <Link href="/contact" className={`hover:text-gray-300 fixed shadow-[0_4px_4px_rgba(255,255,255,0.5)] flex h-1/12 z-50 bottom-[2vh] right-[5vw] bg-blue-900 text-white p-2 rounded-xl ${contact_visible ? 'visibletransition':'invisibletransition'}`}>{translations.contact} ✏️</Link>
        </div>
        
    )
}