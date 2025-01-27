import Link from "next/link"
export default function Connect(){
    return(
        <div className="flex flex-row w-full p-4">
            <Link href='https://linkedin.com' className="w-1/2 pr-4 hover:opacity-80">
                <img src="linkedin.svg" alt="LinkedIn" className="w-full"/>
            </Link>
            
            <Link href='https://github.com' className="w-1/2 pl-4 hover:opacity-80">
                <img src="github.svg" alt="Github" className="w-full"/>
            </Link>
        </div>
    )
}