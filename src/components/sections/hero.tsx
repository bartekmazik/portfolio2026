import Button from "../ui/button";
import Section from "../ui/section";

const Hero = () => {
  return (
    <Section id="#">
      <div className="pt-24 lg:pt-36 lg:flex flex-col items-start justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold">Bartłomiej Mazik</h1>
        <h3 className="pt-2 lg:pt-3 lg:text-xl">
          (SEO / WEB DEV / UI DESIGNER)
        </h3>
        <h2 className="pt-12 lg:pt-8 max-w-2xl">
          I build fast, modern web apps with Next.js &amp; TypeScript
        </h2>
      </div>
      <div className="pt-6 lg:pt-8 flex flex-row gap-4">
        <Button text="CONTACT" href="#contact" />
        <Button text="CV" href="/CV_Bartlomiej_Mazik.pdf" external />
      </div>
    </Section>
  );
};

export default Hero;
