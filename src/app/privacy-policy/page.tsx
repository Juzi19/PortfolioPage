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

            <h2 className="text-xl p-2 font-bold">Trackboxx Web-Analyse</h2>

            <p>
                

                Auf dieser Website verwenden wir Trackboxx, einen Webanalysedienst der Trackboxx – Christian Pust, Humboldtstraße 9, 38820 Halberstadt, Deutschland. Trackboxx dient der statistischen Auswertung der Nutzung unserer Website, z. B. besuchte Seiten, Verweildauer, Browser- und Geräteinformationen.

                Die Verarbeitung erfolgt pseudonymisiert; die IP-Adresse wird dabei verkürzt und anonymisiert und nicht dauerhaft gespeichert. Eine Weitergabe an Dritte erfolgt nicht.

                Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) zur Optimierung unseres Angebots. Ein Auftragsverarbeitungsvertrag (AVV) mit Trackboxx besteht.

                Nutzer können das Tracking jederzeit deaktivieren. Dies können Sie das jederzeit über die „Do-Not-Track-Funktion“ in Ihrem Browser steuern.
            </p>
            
            <p className="mt-6">&copy; 2025 Justus Zimmermann</p>

            
        </div>



    )
}