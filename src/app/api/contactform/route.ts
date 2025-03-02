import { NextResponse } from "next/server";
import { getCsrfToken_SessionId } from "../../../../lib/auth";
import DOMPurify from "dompurify";
import { sendMail } from "../../../../lib/send-mail";
import {JSDOM} from 'jsdom';
import validator from 'validator';

export async function POST(req:Request) {
    let host_mail = ''
    if(process.env.MAIL != undefined){
        host_mail = process.env.MAIL
    }
    else{
        throw Error("Missing email adress in env variables!")
    }

    const window = new JSDOM('').window;
    const purify = DOMPurify(window);

    console.log("Form succesfully submitted");
    type FormFormat = {
        email:string,
        subject:string,
        body:string,
        privacy:boolean,
        honeypot:string,
        csrfToken:string
    }


    let {email, subject, body, privacy, honeypot, csrfToken}: FormFormat= await req.json();

    const cookies = req.headers.get('cookie');

    const sessionId = getCookie(cookies, 'session');
    console.log("Cookie for sessionid: ", sessionId);
    const proven_token = await getCsrfToken_SessionId(sessionId);
    //Bot Protection
    if(honeypot!=""){
        console.log("Spam/Bot detection")
        return NextResponse.error();
    }
    if(csrfToken == proven_token){
        //checks the csrf token
        console.log("SUCCESS");

        if (!privacy){
            console.log("Privacy error");
            return NextResponse.error();
        }
        console.log("Received email: ", email)
        //sanitizes input
        if (!validator.isEmail(email)) {
            console.log("Email isn't valid")
            return NextResponse.error();
        }
        email = purify.sanitize(email);
        subject = purify.sanitize(subject);
        body = purify.sanitize(body);
        //Add sender's information
        body = `Neue Nachricht von: ${email} . Inhalt: ${body}`;

        console.log("About to send the emails")
        //send email to host
        const info = await sendMail({
            email: email,
            sendTo: host_mail,
            subject: subject,
            text: body
        });

        const user_response = await sendMail({
            email: host_mail,
            sendTo: email,
            subject: 'Your Message to Justus',
            text: "Hi there! Thank you for your message. I'll answer your regard as soon as possible!"
        })

        if(info && user_response){
            console.log("Email send to", email!)
        }
        else{
            console.log("Error when sending the mail")
            return NextResponse.error()
        }

        return NextResponse.json({message:"Success"})
    }
    else{
        return NextResponse.error();
    }

    
}

function getCookie(cookieHeader: string | null, cookieName: string): string | null {
    if (!cookieHeader) return null;
  
    //parse all cookies
    const cookies = cookieHeader.split(';').reduce((acc: Record<string, string>, cookie: string) => {
      const [name, value] = cookie.split('=');
      if (name && value) {
        acc[name.trim()] = decodeURIComponent(value.trim());
      }
      return acc;
    }, {});
  
    // return cookie with name 'session'
    return cookies[cookieName] || null;
  }