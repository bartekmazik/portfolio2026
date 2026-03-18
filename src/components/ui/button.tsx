import React from "react";

const Button = ({ text, action }: { text: string; action?: () => void }) => {
  return (
    <button
      className="border border-foreground font-inter uppercase font-medium min-w-32 px-8 py-1"
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
