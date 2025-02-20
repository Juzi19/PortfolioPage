"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useTranslation } from "@/translations/provider";

export default function Footer(){
    const {translations, changeLanguage} = useTranslation();
    const [de, setDe] = useState(false);
    const [en, setEn] = useState(true);
    const userLanguage = navigator.language;
    useEffect(()=>{
        if(userLanguage == "de"){
            setDe(true);
            setEn(false);
        }
        else{
            setDe(false);
            setEn(true);
        }
    }, [])
    useEffect(()=>{
        if(translations.lang=='de'){
            setDe(true);
            setEn(false);
        }
        else{
            setDe(false);
            setEn(true);
        }
    },[translations.lang])

    return(
        <footer className="relative w-full flex items-center justify-center h-[6vh] bg-[#ffa500] z-20">
            <div>
                <img src="/ger.svg.png" onClick={()=>{changeLanguage('de');setDe(true); setEn(false)}} alt="German" className={`${de?'hidden': 'flex'} absolute hover:cursor-pointer left-[2vw] h-[4vh] bottom-[1vh]`}/>
                <img src="/can.svg.webp" onClick={()=>{changeLanguage('en'); setEn(true); setDe(false);}} alt="English" className={`${en?'hidden': 'flex'} absolute left-[2vw] h-[4vh] bottom-[1vh] hover:cursor-pointer`}/>
            </div>
            <Link href="/imprint" className="text-white headerlink font-bold">{translations.imprint}</Link>
        </footer>
    )
}