import React from "react";
import Section from "../ui/section";

const SkillMeter = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="flex flex-row items-center gap-2 py-1">
      <p className="text-2xl font-bold">{number}</p>
      <p>{text}</p>
    </div>
  );
};

const WorkSection = ({
  period,
  title,
  description,
}: {
  period: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="pt-8">
      <p className="italic">{period}</p>
      <p className="font-inter font-semibold pb-2">{title}</p>
      <p className="">{description}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <Section id="experience" headerText="Experience">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pb-8 pt-4">
        <div>
          <SkillMeter number="5+" text="years of web development" />
        </div>
        <div>
          <SkillMeter number="2+" text="years in SEO" />
        </div>
        <div>
          <SkillMeter number="2+" text="years of commercial experience" />
        </div>
        <div>
          <SkillMeter number="10+" text="successful collaborations" />
        </div>
      </div>
      <div className="max-w-3xl">
        <WorkSection
          period="(2025-2026)"
          title="FULLSTACK / SEO DEVELOPER - WEBDKW"
          description="Shipped production-ready web apps end-to-end - from architecting the database schema to deploying on Vercel. Built a custom e-commerce platform (Kuźnia Billert) on a Next.js + Supabase stack, handled full-cycle development of a real estate agency site (Levante Estate), and contributed to the WebDKW company website across multiple features and subpages. On top of the dev work, took ownership of SEO strategy - implemented on-page and technical optimizations, set up GA4 tracking, and made sure the sites actually get found. Managed CI/CD pipelines and production environments without breaking things. Usually."
        />
        <WorkSection
          period="(2025-2026)"
          title="FULLSTACK / SEO DEVELOPER - WEBDKW"
          description="Shipped production-ready web apps end-to-end - from architecting the database schema to deploying on Vercel. Built a custom e-commerce platform (Kuźnia Billert) on a Next.js + Supabase stack, handled full-cycle development of a real estate agency site (Levante Estate), and contributed to the WebDKW company website across multiple features and subpages. On top of the dev work, took ownership of SEO strategy - implemented on-page and technical optimizations, set up GA4 tracking, and made sure the sites actually get found. Managed CI/CD pipelines and production environments without breaking things. Usually."
        />
      </div>
    </Section>
  );
};

export default Experience;
