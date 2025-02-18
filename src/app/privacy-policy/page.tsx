"use client"
import { useTranslation } from "@/translations/provider"

export default function PrivacyPolicy(){
    const {translations} = useTranslation();
    return(
        

        <div className="relative flex justify-center items-center p-[8%] flex-col text-center">
            <h1 className="text-4xl p-3 font-bold">{translations.privacyTitle}</h1>
            
            <h2 className="text-2xl p-2 font-bold">{translations.generalInfoTitle}</h2>
            <p>{translations.generalInfoText}</p>

            <h2 className="text-2xl p-2 font-bold">{translations.cookiesTitle}</h2>
            <p>{translations.cookiesText}</p>
            <ul>
                <li>{translations.cookiesType}</li>
                <li>{translations.cookiesPurpose}</li>
                <li>{translations.cookiesDuration}</li>
            </ul>

            <h2 className="text-2xl p-2 font-bold">{translations.contactFormTitle}</h2>
            <p>{translations.contactFormText}</p>
            <p>{translations.contactFormDataUse}</p>

            <h2 className="text-2xl p-2 font-bold">{translations.dataDisclosureTitle}</h2>
            <p>{translations.dataDisclosureText}</p>

            <h2 className="text-2xl p-2 font-bold">{translations.rightsTitle}</h2>
            <p>{translations.rightsText}</p>

            <h2 className="text-2xl p-2 font-bold">{translations.policyChangesTitle}</h2>
            <p>{translations.policyChangesText}</p>

            <h2 className="text-2xl p-2 font-bold">{translations.contactTitle}</h2>
            <p>{translations.contactText}</p>
            <p><a href="mailto:justus.webdev@gmail.com">{translations.email}</a></p>
            
            <p className="mt-6">&copy; 2025 Justus Zimmermann</p>
        </div>



    )
}