"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";

const navLinks = ["About", "Experience", "Tech Stack", "Projects", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  return (
    <>
      <motion.nav
        className="sticky inset-0 md:px-12 lg:px-[25vw] left-0 w-full flex flex-row items-center lg:justify-center justify-end px-4 sm:px-6 z-50"
        animate={{
          backgroundColor:
            isOpen || !scrolled ? "rgba(10,8,6,0)" : "rgba(10,8,6,0.95)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="hidden lg:flex items-center gap-8 max-w-6xl w-full">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="font-inter text-sm uppercase hover:opacity-70 transition-opacity duration-200"
            >
              {link}
            </a>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? (
            <X width={32} height={32} />
          ) : (
            <Menu width={32} height={32} />
          )}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-3 bg-[#111111b9] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsOpen(false)}
                className="text-xl font-inter font-semibold uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
