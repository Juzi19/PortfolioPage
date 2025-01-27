export default function Milestone({props}:{
    props:{
        headline: string,
        text: string,
        imageURL: string[]
    }
    
}
){
    return(
        <div className="flex flew-row items-center justify-center">
            <div>
                <svg width="8" height="20" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="10" x2="8" y2="10" stroke="#1e3a8a" strokeWidth="2" />
                </svg>
            </div>
            <div className="pl-3">
                <p className="font-bold">{props.headline}</p>
                <p>{props.text}</p>
                <div className="flex flex-row">
                {
                props.imageURL.map((element, index) => (
                <img key={index} src={element} alt={`Image ${index}`} className="w-[5vh] p-1"/>
                ))
                }
                </div>
                
            </div>
                            
        </div>
    )
}