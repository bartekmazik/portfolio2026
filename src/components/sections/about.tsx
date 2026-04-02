import Image from "next/image";
import Section from "../ui/section";

const About = () => {
  return (
    <Section id="about" headerText="About">
      <div className="flex flex-col lg:flex-row lg:gap-8 py-4 lg:items-start">
        <div className="lg:w-1/3">
          <div className="relative w-full h-[45vh] sm:h-[35vh]">
            <Image
              src="/bartlomiej-mazik.webp"
              fill
              alt="me"
              className="object-fit object-top object-cover"
            />
          </div>
        </div>
        <div className="lg:w-2/3 py-6 sm:py-0">
          <p>
            Just a young man located in Katowice. Since I remember, I've been
            curious about design and technology. That showed me what I want to
            do in life. In 2025 I finished my Computer Science bachelor's at the
            University of Economics in Katowice, where I'm now continuing with a
            master's degree. My biggest ambition is Web development - I work as
            a Fullstack & SEO Developer at WebDKW, building commercial web apps
            with Next.js, Supabase, and Vercel. Beyond coding, I spent years in
            a student organisation, where I learned how to manage teams,
            coordinate events, handle business contacts, and work under real
            deadlines - skills that shaped how I approach every project today.
            When I'm not behind a screen, you'll probably find me flying my
            drone or exploring new places. I'm always looking to combine
            creativity with technology, and I'm currently open for new
            opportunities.
          </p>
          <div className="mt-6">
            <h3 className="font-inter uppercase font-semibold text-sm mb-3">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Web Design",
                "UI/UX",
                "Drones",
                "Investments",
                "Photography",
                "Music",
                "Coffee",
                "Traveling",
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 text-sm border border-current"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
