import Lang from "../../components/Lang"
import { Popup } from "../../components/Popup"
import { useState } from "react"

export const Projects = () => {
    const [popup, setPopup] = useState("")

    const handleClick = (e) => {
        e.preventDefault();
        setPopup(e.currentTarget.value);
    }

    return (
        <div>
            <main className="w-screen h-fit -z-10">
                <div className="flex justify-center mt-6">
                    <h1 className="font-bold text-center w-fit p-3 border-2 border-blue-400 bg-blue-600 hover:opacity-70 text-white rounded-3xl">{Lang("projects")}</h1>
                </div>
                <div className="flex flex-wrap justify-center">
                    <button onClick={handleClick} value="visits" className="text-lg font-bold text-center flex-none lg:w-[35rem] md:w-[40rem] w-5/6 h-[24rem] mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">
                        <p>{Lang("visits_title")}</p>
                        <img src="/visits/home_page.png" alt="image" />
                    </button>
                    <button onClick={handleClick} value="repruebainador" className="text-lg font-bold text-center flex-none lg:w-[35rem] md:w-[40rem] w-5/6 h-[24rem] mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">
                        <p>{Lang("repruebainador_title")}</p>
                        <img src="/repruebainador/home_page.png" alt="image" />
                    </button>
                    <button onClick={handleClick} value="stenography" className="text-lg font-bold text-center flex-none lg:w-[35rem] md:w-[40rem] w-5/6 h-[24rem] mx-5 mt-6 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">
                        <p>{Lang("stenography_title")}</p>
                        <img src="/stenography/home_page.png" alt="image" />
                    </button>
                </div>
            </main>
            <Popup popup={popup} setPopup={setPopup}/>
        </div>
    )
}