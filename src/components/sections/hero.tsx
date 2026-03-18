import Button from "../ui/button";
import Section from "../ui/section";

const Hero = () => {
  return (
    <Section id="#">
      <div className="pt-36">
        <h1 className="text-4xl font-bold">Bartłomiej Mazik</h1>
        <h3 className="pt-2">(SEO / WEB DEV / UI DESIGNER)</h3>
        <h2 className="pt-12">
          I build fast, modern web apps with Next.js &amp; TypeScript
        </h2>
      </div>
      <div className="pt-4 flex flex-row gap-4">
        <Button text="CONTACT" />
        <Button text="CV" />
      </div>
    </Section>
  );
};

export default Hero;
