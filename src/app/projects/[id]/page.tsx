export default function Project({params}:{params:{id:string}}){
    return(
        <div className="pt-[12vh] h-[100vh] flex items-center flex-col justify-center">
            <h1 className="text-2xl font-bold">No Project {params.id} yet!</h1>
            <h2 className="pt-[12vh]">I'm always open to work on your idea. Contact me and let project {params.id} become real!🚀</h2>

        </div>
    )
}

