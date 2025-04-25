import { SiGmail } from "react-icons/si";
import { FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container footer">
      <div className="navfoot flex flex-wrap justify-around my-4 border-t py-8">
        <a href="mailto:farazahmad8748@gmail.com" target="_blank">
          <SiGmail color="#ff4343" size="2em" className="footitem" />
        </a>
        <a href="https://twitter.com/ahmad-faraz" target="_blank">
          <FaWhatsapp color="#25D366" size="2em" className="footitem" />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmad-faraz-46375b163/"
          target="_blank"
        >
          <FaLinkedin color="#1DA1F2" size="2em" className="footitem" />
        </a>
        <a href="https://github.com/Ahmad-Faraz10" target="_blank">
          <AiFillGithub size="2em" className="footitem" />
        </a>
      </div>
      <div></div>
    </div>
  );
};
export default Footer;
