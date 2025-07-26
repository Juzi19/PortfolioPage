"use client"

import { useTranslation } from "@/translations/provider"

export default function Imprint(){
    const {translations} = useTranslation();
    return(
        <div className="pt-[12vh] flex flex-col min-h-[100vh] items-center justify-center text-center">
            <h1>{translations.imprint}</h1>
            <p><strong>{translations.owner}:</strong> Justus Zimmermann</p>
            <p><strong>{translations.address}:</strong> Tizianstraße 121, 80638 München, Deutschland</p>
            <p><strong>{translations.phone}:</strong> +49 1512 1357649</p>
            <p><strong>Email:</strong> <a href="mailto:justus.webdev@gmail.com">justus.webdev@gmail.com</a></p>

            <h1 className="font-bold mt-6 mb-2">Vollständige Angaben:</h1>
            <p className="m-4">
                Angaben gemäß § 5 TMG:
                <br />
                Justus Zimmermann
                <br />
                Tizianstraße 121
                <br />
                80638 München
                <br />
                Deutschland

                <br /><br />

                Kontakt:
                <br />
                Telefon: +49 1512 1357649
                <br />
                E-Mail: justus.zimmermann@gmx.de
                <br /><br />

                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
                <br />
                Justus Zimmermann
                <br />
                Tizianstraße 121
                <br />
                80638 München
                <br />
                Deutschland
                <br />
                Haftungsausschluss:
                <br /><br />
                Haftung für Inhalte
                <br />
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                <br />
                Haftung für Links
                <br />
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                <br /><br />
                Urheberrecht
                <br />
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

        </div>
    )
}