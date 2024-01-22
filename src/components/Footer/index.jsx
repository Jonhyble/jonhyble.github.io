import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faDiscord,
    faFacebook, 
    faGithub, 
    faLinkedin, 
    faWhatsapp,
    faXTwitter,
} from '@fortawesome/free-brands-svg-icons'
import Lang from "../Lang"
import './index.css'

export const Footer = () => {
    return (
        <div className="footer-cont bg-blue-700 opacity-80">
            <div className="text-sky-50 font-bold text-center text-xl w-screen">
                {Lang("contact")}
            </div>
            <div className="cont-div flex flex-col flex-wrap">
                <a className="text-sky-50 w-10 text-center" href="#">
                    <FontAwesomeIcon className="h-8" icon={faFacebook} />
                </a>
                <a className="text-sky-50 w-10 text-center" href="#">
                    <FontAwesomeIcon className="h-8" icon={faWhatsapp} />
                </a>
                <a className="text-sky-50 w-10 text-center" href="#">
                    <FontAwesomeIcon className="h-8" icon={faXTwitter} />
                </a>
                <a className="text-sky-50 w-10 text-center" href="#">
                    <FontAwesomeIcon className="h-8" icon={faGithub} />
                </a>
                <a className="text-sky-50 w-10 text-center" href="#">
                    <FontAwesomeIcon className="h-8" icon={faLinkedin} />
                </a>
                <a className="text-sky-50 w-10 text-center" href="#">
                    <FontAwesomeIcon className="h-8" icon={faDiscord} />
                </a>
            </div>
        </div>
    )
}