import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import { getImageProps } from "next/image";

function getBackgroundImage(srcSet = "") {
  const imageSet = srcSet
    .split(", ")
    .map((str) => {
      const [url, dpi] = str.split(" ");
      return `url("${url}") ${dpi}`;
    })
    .join(", ");
  return `image-set(${imageSet})`;
}

export default function Home() {
  const {
    props: { srcSet },
  } = getImageProps({ alt: "", width: 3000, height: 3000, src: "/bg.jpg" });
  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <main className="font-noto h-screen w-screen" style={{ backgroundImage }}>
      <Hero />
      <About />
      <Experience />
    </main>
  );
}
