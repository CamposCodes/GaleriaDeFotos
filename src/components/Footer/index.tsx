import * as C from "./styles";
import {FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa"

export const Footer = () => {
    return(
        <C.Container>
            <div>
                <div>
                <p><a target="_blank" href="https://www.instagram.com/dev.camposg/"><FaInstagram/></a></p>
                <p><a target="_blank" href="https://github.com/CamposCodes"><FaGithub/></a></p>
                <p><a target="_blank" href="https://www.linkedin.com/in/gabriel-campos-lima-alves-947554249/"><FaLinkedin/></a></p>
                </div>
            </div>
            <p className="tag">Desenvolvido por CamposCodes</p>
        </C.Container>
    );
}