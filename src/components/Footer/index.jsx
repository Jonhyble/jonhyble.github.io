import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faDiscord,
    faFacebook, 
    faGithub, 
    faLinkedin, 
    faWhatsapp,
    faXTwitter,
    faTelegram
} from '@fortawesome/free-brands-svg-icons'
import Lang from "../Lang"
import './index.css'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Footer = () => {
    return (
        <div className="footer-cont bg-blue-700 opacity-80">
            <div className="text-sky-50 font-bold text-center text-xl w-screen">
                {Lang("contact")}
            </div>
            <div className="place-content-center mt-5 flex flex-wrap">
                <a className="text-sky-50 w-10 mx-3 text-center" href="mailto:jonhy3-valadez@hotmail.com" target="_blank"> 
                    <FontAwesomeIcon className="h-8" icon={faEnvelope} />
                </a>
                <a className="text-sky-50 w-10 mx-3 text-center" href="https://t.me/+523311918891" target="_blank">
                    <FontAwesomeIcon className="h-8" icon={faTelegram} />
                </a>
                <a className="text-sky-50 w-10 mx-3 text-center" href="https://github.com/Jonhyble" target="_blank">
                    <FontAwesomeIcon className="h-8" icon={faGithub} />
                </a>
                <a className="text-sky-50 w-10 mx-3 text-center" href="https://mx.linkedin.com/in/jonathan-joshua-romo-valadez-1644982ab" target="_blank">
                    <FontAwesomeIcon className="h-8" icon={faLinkedin} />
                </a>
            </div>
        </div>
    )
}