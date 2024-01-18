import lng from "../../../public/lng.json"

const Lang = (item) => {
    const lang = localStorage.getItem("lng") || "en";
    return lng[lang][item];
}

export default Lang;