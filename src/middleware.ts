import { NextResponse } from "next/server";
import { getSession, startSession } from "../lib/auth";

export async function middleware(){    
    const isAuthenticated = await getSession();
    if (!isAuthenticated){
        //if not authenticated, start a session
        console.log("Start session");
        await startSession();
    }

    const response = NextResponse.next();

    //securityheaders
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set(
        "Strict-Transport-Security",
        "max-age=31536000; includeSubDomains; preload"
    );
    response.headers.set(
        "Content-Security-Policy",
        `
        default-src 'self';
        script-src 'self' trusted-scripts.example.com;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data:;
        connect-src 'self' api.example.com;
        `.replace(/\s{2,}/g, " ") // removes unnecessary chars
    );

    //handles request normally
    return NextResponse.next();
}

export const config = {
    runtime: 'nodejs',
  };
  
  