import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-56 bg-red pt-8 ">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            MERVE BARIŞ
          </p>
          <p className="font-playfair text-xl text-yellow">
            ©2023 ESPER. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;