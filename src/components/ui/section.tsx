import React from "react";
import Header from "./header";

const Section = ({
  children,
  className,
  id,
  headerText,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  headerText?: string;
}) => {
  return (
    <section
      className={`min-h-[60vh] lg:min-h-[40vh] pb-20 lg:pb-32 flex flex-col ${className}`}
      id={id}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col">
        {headerText && <Header text={headerText} />}
        {children}
      </div>
    </section>
  );
};

export default Section;
