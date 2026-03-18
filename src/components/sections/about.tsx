import Image from "next/image";
import Header from "../ui/header";
import Section from "../ui/section";

const About = () => {
  return (
    <Section id="#about" headerText="About">
      <div className="relative w-full h-1/3">
        <Image
          src="/about-img.jpg"
          fill
          alt="me"
          className="object-fit object-cover"
        />
      </div>
      <p className="text-xs pt-1 font-inter uppercase font-medium">
        MYSELF AND KATOWICE 2025
      </p>
      <p className="pt-6">
        Just a young man located in <b>Katowice</b>. Since I remember, I’ve been
        curious about design and technology. That showed me what I want to do in
        life. In 2025 I finished <b>Computer Science</b> bachelor on University
        of Economics in Katowice. My biggest ambition is <b>Web development</b>
        and things similar to this topic. I want to do creative things and
        embrace new trends in <b>modern design</b>.
      </p>
    </Section>
  );
};

export default About;
