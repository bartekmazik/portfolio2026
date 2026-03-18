import React from "react";

const Header = ({ text }: { text: string }) => {
  return (
    <>
      <h2 className="uppercase font-inter font-medium">{text}</h2>
      <hr className="w-full text-foreground mb-4"></hr>
    </>
  );
};

export default Header;
