import { useState } from "react"
import Lang from "../../components/Lang"


export const Popup = ({ popup, setPopup }) => {
    const [content, setContent] = useState(0);

    const projectsImages = {
        "visits" : [
            "/visits/home_page.png",
            ""
        ],
        "salesSystem" : [
            "",
            ""
        ]
    }

    const imagesOnClick = (e) => {
        e.preventDefault();
        setContent(0);
    }

    const descriptionOnClick = (e) => {
        e.preventDefault();
        setContent(1);
    }

    const technologiesOnClick = (e) => {
        e.preventDefault();
        setContent(2);
    }

    const closePop = (e) => {
        e.preventDefault();
        setPopup("");
        console.log(projectsImages[popup]);
    }

    function PlaceContent() {
        if (content === 0) {
            return <div className="w-full h-5/6 bg-blue-200">Imagenes</div>
        } else if (content === 1) {
            return <div className="w-full h-5/6 bg-blue-200">Descripcion</div>
        } else {
            return <div className="w-full h-5/6 bg-blue-200">Tecnologias</div>
        }
    }
    
    return (
        <div className={`w-screen grid h-screen fixed top-0 left-0 right-0 z-10 ${popup === "" ? "hidden" : ""}`}>
            <div className="w-screen h-screen fixed bg-blue-800 opacity-50 top-0 left-0 right-0"/>
            <button onClick={closePop} className="fixed top-0 mr-4 text-4xl right-0 hover:text-sky-200">X</button>
            <div className="w-5/6 h-5/6 absolute place-self-center bg-blue-500">
                <div className="w-full h-5/6 bg-blue-200"><PlaceContent/></div>
                <div className="w-full flex justify-around h-1/6 bg-blue-800">
                    <button onClick={imagesOnClick} className="bg-blue-500 h-full w-full border border-sky-500">{Lang("button_images")}</button>
                    <button onClick={descriptionOnClick} className="bg-blue-500 h-full w-full border border-sky-500">{Lang("button_description")}</button>
                    <button onClick={technologiesOnClick} className="bg-blue-500 h-full w-full border border-sky-500">{Lang("button_technologies")}</button>
                </div>
            </div>
        </div>
    )
}