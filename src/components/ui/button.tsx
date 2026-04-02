import React from "react";

const style =
  "border border-foreground font-inter cursor:pointer uppercase font-medium min-w-32 px-8 py-1 text-center " +
  "transition-all duration-200 ease-out  " +
  "hover:bg-foreground hover:text-background";
const Button = ({
  text,
  action,
  href,
  external = false,
}: {
  text: string;
  action?: () => void;
  href?: string;
  external?: boolean;
}) => {
  if (href) {
    return (
      <a
        className={style}
        href={href}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer nofollow" : undefined}
      >
        {text}
      </a>
    );
  }

  return (
    <button className={style} onClick={action}>
      {text}
    </button>
  );
};

export default Button;
