import Lang from "../../components/Lang"

export const Projects = () => {
    return (
        <main className="w-screen h-fit -z-10">
            <div className="flex justify-center mt-6">
                <h1 className="font-bold text-center w-fit p-3 border-2 border-blue-400 bg-blue-600 hover:opacity-70 text-white rounded-3xl">{Lang("projects")}</h1>
            </div>
            <div className="flex flex-wrap justify-center">
                <p className="text-lg font-bold text-center flex-none lg:w-[35rem] md:w-[40rem] w-5/6 h-64 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">C</p>
                <p className="text-lg font-bold text-center flex-none lg:w-[35rem] md:w-[40rem] w-5/6 h-64 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">C++</p>
                <p className="text-lg font-bold text-center flex-none lg:w-[35rem] md:w-[40rem] w-5/6 h-64 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">C#</p>
                <p className="text-lg font-bold text-center flex-none lg:w-[35rem] md:w-[40rem] w-5/6 h-64 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">Python</p>
            </div>
        </main>
    )
}