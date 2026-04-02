import Link from "next/link";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="font-noto w-full px-8 md:px-12 lg:px-[25vw] min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-8xl lg:text-9xl font-bold mb-4">404</h1>
        <h2 className="text-2xl lg:text-4xl font-bold mb-3">Page Not Found</h2>
        <p className="text-base lg:text-lg max-w-xl mb-8 opacity-75">
          The page you're looking for doesn't exist. It might have been moved or
          deleted.
        </p>
        <Button text="BACK HOME" href="/" />
      </div>
    </main>
  );
}
