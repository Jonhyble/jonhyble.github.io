import { useState } from "react"
import Lang from "../../components/Lang"
import './index.css'

export const Popup = ({ popup, setPopup }) => {
    const [content, setContent] = useState(0);
    const [image, setImage] = useState(0);

    const projectsImages = {
        "visits" : [
            "/visits/home_page.png",
            "/visits/01.png"
        ],
        "repruebainador" : [
            "/repruebainador/home_page.png",
            "/repruebainador/01.png"
        ],
        "stenography" : [
            "/stenography/home_page.png",
            "/stenography/01.png"
        ]
    }

    const technologies = {
        "visits" : [
            "React", 
            "React Native",
            "JavaScript",
            "MySql"
        ],
        "repruebainador" : [
            "Python",
            "JavaScript",
            "Electron"
        ],
        "stenography" : [
            "JavaScript",
            "React",
            "Python",
            "FastAPI",
            "Docker",
            "Kubernetes"
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
        setContent(0);
        setImage(0);
    }

    const changeImage = (e) => {
        e.preventDefault();
        if (e.currentTarget.value === "true") {
            if (image >= projectsImages[popup].length - 1)
                setImage(0);
            else 
                setImage(image + 1);
        }
        else if (image <= 0){
            setImage(projectsImages[popup].length - 1);
        } else {
            setImage(image - 1);
        }
    }

    const listItems = technologies[popup]?.map((option) =>
        <p key={option} className="text-lg font-bold text-center flex-none w-36 m-2 p-3 border-2 border-blue-400 bg-blue-500 hover:opacity-70 text-white rounded-3xl">{option}</p>
    );

    function PlaceContent() {
        if(popup !== "")
            if (content === 0) {
                return <div className="w-full h-full bg-blue-200"><button onClick={changeImage} value={false} className="absolute left-0 h-full w-1/12 text-9xl bg-blue-300/75">{"<"}</button><button onClick={changeImage} value={true} className="absolute right-0 h-full w-1/12 text-9xl bg-blue-300/75">{">"}</button><img className="m-auto max-h-full max-w-full" src={projectsImages[popup][image]} alt="image" /></div>
            } else if (content === 1) {
                return <div className="w-full h-fit bg-blue-200 text-blue-800 m-auto text-center absolute inset-y-1/2 text-4xl">{Lang(popup + "_description")}</div>
            } else {
                return  <div className="grid place-content-center grid-template w-full h-full">{listItems}</div>
            }
    }
    
    return (
        <div className={`w-screen grid h-screen fixed top-0 left-0 right-0 z-10 ${popup === "" ? "hidden" : ""}`}>
            <div className="w-screen h-screen fixed bg-blue-800 opacity-50 top-0 left-0 right-0"/>
            <button onClick={closePop} className="fixed top-0 mr-4 text-4xl right-0 hover:text-sky-200">X</button>
            <div className="w-5/6 h-5/6 absolute place-self-center bg-blue-500">
                <div className="w-full h-5/6 bg-blue-200 relative"><PlaceContent/></div>
                <div className="w-full flex justify-around h-1/6 bg-blue-800">
                    <button onClick={imagesOnClick} className="bg-blue-500 h-full w-full border border-sky-500">{Lang("button_images")}</button>
                    <button onClick={descriptionOnClick} className="bg-blue-500 h-full w-full border border-sky-500">{Lang("button_description")}</button>
                    <button onClick={technologiesOnClick} className="bg-blue-500 h-full w-full border border-sky-500">{Lang("button_technologies")}</button>
                </div>
            </div>
        </div>
    )
}