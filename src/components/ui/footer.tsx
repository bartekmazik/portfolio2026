import React from "react";
import Image from "next/image";

const SocialButton = ({ src, href }: { src: string; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      title={src.split(".")[0]}
      rel="noopener noreferrer"
      className="w-6 h-6 flex items-center justify-center 
            
                 hover:scale-110 transition duration-200"
    >
      <img
        src={`/${src}`}
        alt={src.split(".")[0]}
        className="object-contain w-full h-full"
      />
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="w-full px-8 md:px-12 lg:px-[25vw] py-6 lg:py-8 font-noto">
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        <hr className="w-full text-foreground mb-4"></hr>
        <div className="flex items-center justify-between">
        <p className="text-sm ">
          © {new Date().getFullYear()} Bartłomiej Mazik
        </p>

        <div className="flex items-center gap-4 lg:gap-6">
          <SocialButton
            src="Github.svg"
            href="https://github.com/bartekmazik"
          />
          <SocialButton
            src="Linkedin.svg"
            href="https://www.linkedin.com/in/bartlomiejmazik/"
          />
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
