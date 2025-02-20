"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface TranslationContextType {
    translations: Record<string, string>; //translations are maps
    changeLanguage: (newLang: string) => void;
}

const defaultContextValue: TranslationContextType = {
    translations: {}, 
    changeLanguage: () => {}, 
};

const TranslationContext = createContext(defaultContextValue);

//This component sets up the translation context, manages the current language, and loads the relevant JSON file based on the selected language.
export default function TranslationProvider({ children }:{children: ReactNode}) {
    const [translations, setTranslations] = useState({});
    const [lang, setLang] = useState("de");  
    useEffect(() => {
      import(`../app/i18n/${lang}.json`).then((module) =>
        setTranslations(module.default)
      );
    }, [lang]);  
    
    const changeLanguage = (newLang:string) => {
      setLang(newLang);
    };  
    //makes the translation globally accessibly
    return (
        <TranslationContext.Provider value={{ translations, changeLanguage }}>
        {children}
      </TranslationContext.Provider>
    );
  }
//A custom hook that allows any component to easily access the current translations and change the language.
export function useTranslation() {
    //access for all child components
    return useContext(TranslationContext);
}