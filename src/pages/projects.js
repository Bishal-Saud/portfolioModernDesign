import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImg = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light dark:text-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImg
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:1200px) 100vw,
          (max-width:1200px)50vw,50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 text-dark dark:text-light lg:pl-0 lg:pt-6 lg:w-full ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm ">
            {title}
          </h2>
        </Link>
        <p
          className="my-2 font-medium  
        "
        >
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} className="w-10" target="_blank">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            visit projects
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article className="w-full flex-col flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light dark:text-light xs:p-4 ">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] lg:text-lg md:text-base" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImg
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:1200px) 100vw,
          (max-width:1200px)50vw,50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-6 ">
        <span className="text-primary dark:text-primaryDark font-medium text-xl">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className=" w-full mt-2 flex justify-between items-center">
          <Link
            href={link}
            target="_blank"
            className="ml-4 underline text-lg font-semibold md:text-base"
          >
            visit
          </Link>
          <Link href={github} className="w-8 md:w-6" target="_blank">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
export default function Projects() {
  return (
    <>
      <Head>
        <title>CodeBucks \ Project Page</title>
        <meta name="projects" content="all projects" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title={"Crypto Screener Application"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link="/"
                type="Featured Projects"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title={"Crypto Screener Application"}
                link="/"
                type="Featured Projects"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"Crypto Screener Application"}
                link="/"
                type="Featured Projects"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title={"Crypto Screener Application"}
                summary={
                  "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                }
                link="/"
                type="Featured Projects"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"Crypto Screener Application"}
                link="/"
                type="Featured Projects"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              {" "}
              <Project
                title={"Crypto Screener Application"}
                link="/"
                type="Featured Projects"
                img={project1}
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
