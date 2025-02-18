"use client"

import { useEffect, useState } from "react";
import { useTranslation } from "@/translations/provider";

export default function Highscore(){
    const {translations} = useTranslation();
    const[rgtext, setrgText] = useState(translations.load);
    useEffect(()=>{
        async function getData() {
            const res = await fetch('/api/highscore', {cache:"no-store"});
            const data= await res.json();
            setrgText(translations.startHighscore + data.name + translations.midH + data.coins + translations.endH)
        }
        getData();
    },[])
    return(
        <p className="w-full flex items-center justify-center text-2xl font-bold text-center px-2">{rgtext}</p>
    )
}