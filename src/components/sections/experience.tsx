import React from "react";
import Section from "../ui/section";

const SkillMeter = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="flex flex-row text-xl sm:text-2xl items-center gap-2 py-1">
      <p className="text-3xl sm:text-4xl font-bold">{number}</p>
      <p>{text}</p>
    </div>
  );
};

const WorkSection = ({
  period,
  title,
  description,
  company,
  href,
}: {
  period: string;
  title: string;
  description: string;
  company: string;
  href: string;
}) => {
  return (
    <div className="pt-8">
      <p className="italic">{period}</p>
      <p className="font-inter font-semibold pb-2 text-xl">
        {title} -{" "}
        <a href={href} className="font-bold underline">
          {company}
        </a>
      </p>
      <p className="">{description}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <Section id="experience" headerText="Experience">
      <div className="grid grid-cols-1 sm:grid-cols-2   gap-4  pb-8 pt-4">
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
      <div className="sm:w-2/3">
        <WorkSection
          period="(2025-2026)"
          title="FULLSTACK / SEO DEVELOPER"
          company="WEBDKW"
          href="https://webdkw.net/"
          description="Developing and shipping production-grade web applications using a modern JavaScript/TypeScript stack - Next.js, Supabase, Prisma ORM, and Vercel. Responsible for end-to-end delivery: from database schema design and REST API implementation through responsive frontend development to CI/CD pipelines and production deployment. Driving on-page and technical SEO strategies, implementing structured data, optimizing Core Web Vitals, and integrating Google Analytics 4 for data-driven performance tracking. Managed production environments without breaking things. Usually."
        />
        <WorkSection
          period="(2024-2025)"
          title="SOFTWARE TESTING INTERN"
          company="ARIBO"
          href="https://www.linkedin.com/company/myaribo"
          description="Performed manual and unit testing across mobile and web applications in an Agile/Scrum environment. Authored detailed test scenarios, documented and triaged software defects using Jira and Miro, and collaborated closely with development teams to improve overall product quality and release stability."
        />
        <WorkSection
          period="(2022-2026)"
          title="WEB DEVELOPER & COORDINATOR"
          company="STUDENT ORGANISATION PANEUROPA"
          href="https://paneuropa.com.pl/"
          description="Managing the organisation's web presence and delivering event websites from concept to deployment. Coordinating cross-functional teams on external projects while gaining hands-on experience in project management, stakeholder communication, digital marketing, and event logistics."
        />
      </div>
    </Section>
  );
};

export default Experience;
