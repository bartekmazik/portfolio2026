import Image from "next/image";
import Header from "../ui/header";
import Section from "../ui/section";

const About = () => {
  return (
    <Section id="#about" headerText="About">
      <div className="flex flex-col lg:flex-row lg:gap-8 pt-4 lg:items-start">
        <div className="lg:w-1/3">
          <div className="relative w-full  h-[25vh]">
            <Image
              src="/about-img.jpg"
              fill
              alt="me"
              className="object-fit object-cover"
            />
          </div>
          <p className="text-xs pt-1 lg:pt-2 font-inter uppercase font-medium">
            MYSELF AND KATOWICE 2025
          </p>
        </div>
        <div className="lg:w-2/3">
          <p className="">
            Just a young man located in <b>Katowice</b>. Since I remember, I've
            been curious about design and technology. That showed me what I want
            to do in life. In 2025 I finished <b>Computer Science</b> bachelor
            on University of Economics in Katowice. My biggest ambition is{" "}
            <b>Web development</b>
            and things similar to this topic. I want to do creative things and
            embrace new trends in <b>modern design</b>.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
