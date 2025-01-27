import Link from "next/link"
export default function Projectcard({props}:{
    props:{
        headline: string,
        text: string,
        imageURL: string,
        linkURL: string,
        link: string,
        backgroundColor: string
    }
}){
    return(
        <div className="w-full flex flex-col bg-white p-4">
            <div className={`flex flex-col py-4 pb-8 px-4 text-center w-full justify-center items-center rounded-xl ${props.backgroundColor}`}>
                <h1 className="text-2xl font-bold">{props.headline}</h1>
                <div className="flex md:flex-row flex-col pt-8">
                    
                    <div className="md:w-1/2 w-full pr-4 md:border-r-[6px] border-blue-900">
                    <p className="pb-6">{props.text}</p>
                    <Link href={props.linkURL} className="bg-blue-900 p-4 rounded-xl text-white font-bold hover:opacity-80">{props.link}</Link>
                    </div>
                    <div className="w-1/2 hidden  md:flex h-full items-center md:justify-center">
                        <img src={props.imageURL} alt={props.headline} className="w-[20vh] pt-4" />
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}