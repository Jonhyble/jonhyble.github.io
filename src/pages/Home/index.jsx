import Lang from "../../components/Lang"

export const Home = () => {
    return (
        <main className="w-screen h-fit -z-10">
            <div className="flex justify-center mt-6">
                <h1 className="font-bold text-center w-fit p-3 border-2 border-blue-400 bg-blue-600 hover:opacity-70 text-white rounded-3xl">{Lang("title")}</h1>
            </div>
            <div className="flex justify-center mt-6">
                <p className="text-lg font-bold w-2/3 text-justify border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl p-5">{Lang("user")}</p>
            </div>
            <div className="flex justify-center mt-6">
                <p className="text-lg font-bold text-center w-52 flex-none p-3 border-2 border-blue-400 bg-blue-600 hover:opacity-70 text-white rounded-3xl">{Lang("label")}</p>
            </div>
            <div className="flex flex-wrap justify-center">
                <p className="text-lg font-bold text-center flex-none w-72 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">{Lang("spanish")}</p>
                <p className="text-lg font-bold text-center flex-none w-72 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">{Lang("english")}</p>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
                <p className="text-lg font-bold text-center w-1/3 p-3 border-2 border-blue-400 bg-blue-600 hover:opacity-70 text-white rounded-3xl">{Lang("programming")}</p>
            </div>
            <div className="flex flex-wrap justify-center">
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">C</p>
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">C++</p>
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">C#</p>
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">Python</p>
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">Java</p>
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">JavaScript</p>
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">HTML</p>
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">CSS</p>
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">React</p>
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">Express</p>
                <p className="text-lg font-bold text-center flex-none w-36 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">FastAPI</p>
            </div>
            <div className="flex justify-center mt-6">
                <p className="text-lg font-bold text-center w-32 p-3 border-2 border-blue-400 bg-blue-600 hover:opacity-70 text-white rounded-3xl">{Lang("interests")}</p>
            </div>
            <div className="flex flex-wrap justify-center">
                <p className="text-lg font-bold text-center flex-none w-72 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">{Lang("new-technologies")}</p>
                <p className="text-lg font-bold text-center flex-none w-72 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">{Lang("new-languages")}</p>
                <p className="text-lg font-bold text-center flex-none w-72 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">{Lang("backend")}</p>
                <p className="text-lg font-bold text-center flex-none w-72 mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">{Lang("web")}</p>
            </div>
        </main>
    )
}