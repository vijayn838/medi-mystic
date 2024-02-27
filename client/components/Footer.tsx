import { BsFillHeartPulseFill } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0">
              <span className="text-3xl mx-2 text-[#DA3E52]">
                <BsFillHeartPulseFill />
              </span>
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Medi Mystic
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="/" className="mr-4 hover:underline md:mr-6 ">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#steps" className="mr-4 hover:underline md:mr-6">
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="mr-4 hover:underline md:mr-6 "
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              Medi Mystic™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="my-4 lg:text-center">
            Crafted By{" "}
            <a 
              className="underline" 
              href="google.com"
              target="_blank"
            >
              vijay joshi
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;