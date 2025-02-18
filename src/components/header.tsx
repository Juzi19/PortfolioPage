"use client"
import Link from "next/link"
import { useTranslation } from "@/translations/provider";

export default function Header(){
    const {translations} = useTranslation();

    return(
        <header className="fixed w-full z-[100]">
            <nav className="flex w-full bg-blue-900 h-[10vh] items-center justify-center text-white font-bold">
                <Link href="/" className="headerlink">{translations.home}</Link>
                <Link href="/projects" className="headerlink">{translations.projects}</Link>
                <Link href="/about" className="headerlink">{translations.about}</Link>
                <Link href="/contact" className="headerlink">{translations.contact}</Link>
            </nav>
        </header>
    )
}