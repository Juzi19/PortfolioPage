"use client"

import { useTranslation } from "@/translations/provider"

export default function Imprint(){
    const {translations, changeLanguage} = useTranslation();
    return(
        <div className="pt-[12vh] flex flex-col min-h-[100vh] items-center justify-center text-center">
            <h1>{translations.imprint}</h1>
<p><strong>{translations.owner}:</strong> Justus Zimmermann</p>
<p><strong>{translations.address}:</strong> Tizianstraße 121, 80638 Munich, Germany</p>
<p><strong>{translations.phone}:</strong> +49 1512 1357649</p>
<p><strong>Email:</strong> <a href="mailto:justus.webdev@gmail.com">justus.webdev@gmail.com</a></p>

        </div>
    )
}