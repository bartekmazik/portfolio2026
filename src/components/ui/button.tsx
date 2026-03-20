import React from "react";

const style =
  "border border-foreground font-inter uppercase font-medium min-w-32 px-8 py-1 text-center";

const Button = ({
  text,
  action,
  href,
}: {
  text: string;
  action?: () => void;
  href?: string;
}) => {
  if (href) {
    return (
      <a className={style} href={href}>
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
