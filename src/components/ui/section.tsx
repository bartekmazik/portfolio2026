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
      className={`h-[80vh] lg:h-[60vh] px-8 flex flex-col ${className}`}
      id={id}
    >
      {headerText && <Header text={headerText} />}
      {children}
    </section>
  );
};

export default Section;
