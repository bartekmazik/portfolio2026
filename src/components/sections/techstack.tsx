import React from "react";
import Section from "../ui/section";

const TechCategory = ({ label, text }: { label: string; text: string }) => {
  return (
    <div className="flex flex-col gap-1 pb-4">
      <h3 className="font-inter font-semibold uppercase">{label}</h3>
      <h4>{text}</h4>
    </div>
  );
};

const TechStack = () => {
  return (
    <Section id="tech" headerText="Tech Stack">
      <div className="flex flex-col italic items-end pt-4 pb-8 text-sm lg:items-start">
        <p>,,If all you have is a hammer, everything looks like a nail”</p>
        <p className="opacity-80">Abraham Maslow</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <TechCategory
          label="FRONT-END"
          text="Next.js, React.js, TypeScript, TailwindCSS"
        />
        <TechCategory
          label="BACK-END"
          text="Next.js, React.js, TypeScript, TailwindCSS"
        />
        <TechCategory
          label="DATABASE"
          text="Next.js, React.js, TypeScript, TailwindCSS"
        />
        <TechCategory
          label="SEO"
          text="Next.js, React.js, TypeScript, TailwindCSS"
        />
        <TechCategory
          label="TESTING"
          text="Next.js, React.js, TypeScript, TailwindCSS"
        />
        <TechCategory
          label="TOOLS"
          text="Next.js, React.js, TypeScript, TailwindCSS"
        />
      </div>
    </Section>
  );
};

export default TechStack;
