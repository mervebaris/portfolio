
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";



const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={Linkedin} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="twitter-link" src={Twitter} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={Facebook} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={Instagram} />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;