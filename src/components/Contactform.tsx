"use client"

import { useEffect, useState } from "react"
import { useTranslation } from "@/translations/provider";

//marked as use client since parent is client component

export default function Contactform(){
    //Logic to fetch the csrfToken
    const [csrfToken, setCsrfToken] = useState(" ");
    const{translations} = useTranslation();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const formData = new FormData(e.target as HTMLFormElement);
        console.log("Email: ", formData.get('mail'))
        const data = {
          email: formData.get('mail') as string,
          subject: formData.get('subject') as string,
          body: formData.get('body') as string,
          privacy: formData.get('privacy') ? true : false,
          honeypot: formData.get('honeypot') as string,
          csrfToken: formData.get('csrfToken') as string,
        };
    
        try {
          const response = await fetch('/api/contactform', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            alert('Message sent successfully!');
            (e.target as HTMLFormElement).reset();
          } else {
            alert('Error sending message.');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred while sending the message.');
        }
      };

    useEffect(() => {
        async function fetchCsrfToken() {
            try {
                const response = await fetch("/api/csrf-token");
                const data = await response.json(); // expects json format
                setCsrfToken(data.csrfToken);
            } catch (error) {
              console.log(error)
            }
        }

        fetchCsrfToken();
    }, []);

    return(
        <div className="relative z-40 m-4 flex items-center justify-center bg-white w-full min-h-[80vh]">
            <div className="relative rounded-xl flex  items-center justify-center min-h-[75vh] w-full  bg-blue-900">
                <form onSubmit={handleSubmit} className="relative text-white flex flex-col justify-center items-center p-4">
                    <label htmlFor="mail">Mail:</label>
                    <input type="email" name="mail" id="mail" className="m-1 p-1 text-black w-[80vw] sm:w-[50vw] rounded " required/>
                    <label htmlFor="subject">{translations.subject}:</label>
                    <input type="text" id="subject" name="subject" className="m-1 p-1 text-black rounded w-[80vw] sm:w-[50vw]" required/>
                    <label htmlFor="body">{translations.mess}:</label>
                    <textarea name="body" id="body" className=" m-1 p-1 rounded text-black w-[80vw] sm:w-[50vw] h-[30vh]" required></textarea>
                    <label className="w-full text-center">
                        <input type="checkbox" name="privacy" className="mr-1 mt-2" required />
                        {translations.iag} {` `}
                        <a href="/privacy-policy" className="underline" target="_blank">{translations.pp}</a>
                    </label>
                    <input type="text" name="honeypot" id="honeypot" className="hidden"/>
                    <input type="hidden" name="csrfToken" id="csrfToken" value={csrfToken} />
                    <button type="submit" className="op-link rounded bg-[#ffa500] mt-4 text-white p-2">{translations.send}!</button>
                </form>
            </div>
        </div>
    )
}