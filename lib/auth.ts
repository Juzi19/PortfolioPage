import { SignJWT,jwtVerify } from "jose";
import { cookies } from "next/headers";
import redis from "../lib/redis";

const secretkey = 'secret'; //has to be sotred in env file
//Converting to a uint8array
const key = new TextEncoder().encode(secretkey);

function generateRandomBytes(size:number) {
    const array = new Uint8Array(size);
    crypto.getRandomValues(array);
    return array;
}

function bytesToHex(byteArray: Uint8Array): string {
    return Array.from(byteArray)
        .map((byte: number) => byte.toString(16).padStart(2, '0'))  
        .join('');
}

export async function encrypt(payload:any) {
    return await new SignJWT(payload)
    .setProtectedHeader({alg:'HS256'})
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(key);
}
export async function decrypt(input:string):Promise<any> {
    const {payload} = await jwtVerify(input, key,{
        algorithms:['HS256']
    });
    return payload
}

function generateCsrfToken() {
    const randomBytes = bytesToHex(generateRandomBytes(32));
    return randomBytes;
}

export async function startSession() {
    //Creates an session id
    const id = crypto.randomUUID();
    //Create the session, expires after 2 hours
    const expires = new Date(Date.now()+60*60*2*1000);
    const session = await encrypt({id, expires});

    const csrfToken = generateCsrfToken();

    //Save the session in a cookie
    const user_cookies:any = await cookies();
    //  secure:true in production
    user_cookies.set('session', session, {expires, httpOnly:true,samesite:'Strict', secure: false});

    //Save the session to redis and generate a csrf token, valid for 2 hours
    await redis.set(id, csrfToken);
    await redis.expire(id, 2*60*60);
}

export async function getCsrfToken(){
    const session = await getSession();
    const csrfToken = await redis.get(session.id);
    return csrfToken;
}

export async function getCsrfToken_SessionId(id:any){
    const session = await decrypt(id);
    const csrfToken = await redis.get(session.id);
    return csrfToken;

}

export async function endSession(){
    const user_cookies = cookies();
    (await user_cookies).set('session', '',{expires: new Date(0)})
}

export async function getSession(){
    const user_cookies = cookies();
    const session = (await user_cookies).get('session')?.value;
    if (!session) { // checks for session cookie
        return null;
    }
    // decrypts the session cookie
    return await decrypt(session);
}

