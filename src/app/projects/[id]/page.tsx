export default async function Project({params}:{params: Promise<{id: string}>}){
    const {id} = await params;
    return(
        <div className="pt-[12vh] h-[100vh] flex items-center flex-col justify-center">
            <h1 className="text-2xl font-bold">No Project {id} yet!</h1>
            <h2 className="pt-[12vh]">I&apos;m always open to work on your idea. Contact me and let project {id} become real!🚀</h2>

        </div>
    )
}

