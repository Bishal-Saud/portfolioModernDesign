import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";

import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-1 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} relative group my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-1 inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default function Navbar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="dark:text-light w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="hidden flex-col items-center justify-center lg:flex"
        onClick={handleChange}
      >
        <span
          className={`bg-dark dark:bg-light transition-all ease-out duration-300 block h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1 " : "-translate-y-0.5 "
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all ease-out duration-300 block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all ease-out duration-300 block h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex items-center justify-between  lg:hidden">
        <nav>
          <CustomLink title="Home" href="/" className="mr-4" />
          <CustomLink title="About" href="/about" className="mx-4" />
          <CustomLink title="Projects" href="/projects" className="mx-4" />
          <CustomLink title="Articles" href="/articles" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <PinterestIcon />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <DribbbleIcon />
          </motion.a>

          <button
            className={`rounded-full p-1 flex items-center justify-center ${
              mode === "light" ? " text-dark" : "text-dark bg-light "
            }`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className=" min-w-[70vw] flex-col fixed flex z-30 items-center text-light dark:text-dark justify-between top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 "
        >
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLink
              title="Home"
              href="/"
              className=""
              toggle={handleChange}
            />
            <CustomMobileLink
              title="About"
              href="/about"
              className=""
              toggle={handleChange}
            />
            <CustomMobileLink
              title="Projects"
              href="/projects"
              className=""
              toggle={handleChange}
            />
            <CustomMobileLink
              title="Articles"
              href="/articles"
              className=""
              toggle={handleChange}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap">
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3"
            >
              <TwitterIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              className="w-6 mr-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              className="w-6 mr-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              className="w-6 mr-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <PinterestIcon />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              className="w-6 mr-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <DribbbleIcon />
            </motion.a>

            <button
              className={`rounded-full p-1 flex items-center justify-center ${
                mode === "light" ? " text-dark bg-light" : "text-dark bg-light "
              }`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
