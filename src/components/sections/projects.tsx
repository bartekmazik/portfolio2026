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
    <div className="flex flex-col gap-2 pt-4 h-full">
      <div className="relative p-4 bg-black h-[20vh]">
        <Image
          src={imgSrc}
          fill
          alt={title}
          className="object-cover opacity-80"
        />
      </div>
      <div className="flex flex-col items-start flex-1 justify-between">
        <div>
          <h3 className="font-inter uppercase font-semibold">{title}</h3>
          <p className="pb-4">{description}</p>
        </div>
        <Button text="VIEW" href={href} external />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" headerText="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4">
        <Project
          imgSrc="/kuznia.png"
          title="Kuźnia Billert"
          description="E-commerce store for a local blacksmith built with Next.js and Supabase, featuring a custom admin/CMS for managing products and orders. Integrated the InPost API for shipment and delivery workflows, and Resend for transactional email notifications. I delivered the full implementation end-to-end from database design and data modeling through deployment on Vercel, performance tuning, and SEO optimization."
          href="https://kuzniabillert.pl"
        />
        <Project
          imgSrc="/levante.png"
          title="Levante Estate"
          description="Multilingual Wordpress one-pager for a real estate agent. I handled the full development cycle - from setting up the hosting and Wordpress environment, through designing the database schema and implementing custom features, to deploying and optimizing the site for SEO."
          href="https://levante-estate.com/"
        />
        <Project
          imgSrc="/manuart.png"
          title="Manuart Festiwal"
          description="Event landing page for ManuArt Festiwal built as a fast, SEO-focused web experience. Implemented with Next.js, Prisma for type-safe data access, and deployed on Vercel for edge performance and reliable CI/CD. Delivered a content-first architecture with semantic markup, optimized metadata, and clean internal linking to support strong organic visibility and shareability."
          href="https://manuartfestiwal.pl/"
        />
        <Project
          imgSrc="/letsbrickitdown.png"
          title="Let's Brick It Down!"
          description="Promotional website for the Let’s Brick It Down! event featuring clear information architecture and conversion-oriented CTAs. Developed in Next.js with Prisma and deployed to Vercel, with attention to Core Web Vitals, structured semantic sections, and SEO best practices (metadata strategy, accessible headings, fast navigation). Built to be maintainable and extensible for future editions of the event."
          href="https://www.letsbrickitdown.pl/"
        />
      </div>
    </Section>
  );
};

export default Projects;
