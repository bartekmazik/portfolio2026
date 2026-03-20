import React from "react";
import Section from "../ui/section";
import Image from "next/image";
import Button from "../ui/button";

const Project = ({
  imgSrc,
  title,
  description,
  href,
}: {
  imgSrc: string;
  title: string;
  description: string;
  href: string;
}) => {
  return (
    <div className="flex flex-col gap-2 pb-16 pt-4">
      <div className="relative p-4 bg-black  h-[20vh]">
        <Image
          src={imgSrc}
          fill
          alt={title}
          className="object-cover opacity-80 "
        />
      </div>
      <div className="flex flex-col items-start">
        <h3 className="font-inter uppercase font-semibold">{title}</h3>
        <p className="pb-4">{description}</p>
        <Button text="VIEW" href={href} />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" headerText="Projects">
      <Project
        imgSrc="/kuznia.png"
        title="Kuźnia Billert"
        description="E-comerce website made for a local blacksmith. "
        href="kuzniabillert.pl"
      />
      <Project
        imgSrc="/kuznia.png"
        title="Kuźnia Billert"
        description="E-comerce website made for a local blacksmith. "
        href="kuzniabillert.pl"
      />
    </Section>
  );
};

export default Projects;
