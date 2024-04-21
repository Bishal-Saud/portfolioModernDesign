import Link from "next/link";
import Layout from "./Layout";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between md:flex-col md:text-sm sm:text-xs">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build with{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1 ">
            &#9825;
          </span>{" "}
          by &nbsp;
          <Link
            href="https://bishalsaud.netlify.com"
            className="underline underline-offset-2"
            target="_blank"
          >
            Code Bucks
          </Link>
        </div>
        <Link href="/" target="_blank">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
}
