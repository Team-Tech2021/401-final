import Link from "next/link";
import { useState } from "react";
export default function Footer() {
  const [mode, setMode] = useState("auto");
  return (
    <div className="pt-12">
      <footer id="footer" className="relative z-50 pt-24 bg-white shadow">
        <div className="py-16 border-t border-b border-gray-200 border-gray-700 ">
          <div className="container px-4 mx-auto xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="flex w-full mb-16 lg:w-1/2 lg:mb-0">
                <div className="w-full px-6 lg:w-1/2">
                  <ul>
                    <li>
                      <Link href="#">
                        <a className="text-xs leading-none lg:text-sm hover:text-brand text-white-800 text-white-50">
                          It’s a website where people–mostly software
                          engineers–practice their coding skills. each with
                          multiple solutions.
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="#">
                        <a className="text-xs leading-none lg:text-sm hover:text-brand text-white-800 text-white-50">
                          Our active users cite the following reasons for
                          preferring Kuro: more questions, better quality, plus
                          a strong user base.
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full px-6 lg:w-1/2">
                  <ul>
                    <li>
                      <Link href="#">
                        <a className="text-xs leading-none lg:text-sm hover:text-brand text-white-800 text-white-50">
                          anything{" "}
                        </a>
                      </Link>
                    </li>
                    <li className="mt-6">
                      <Link href="#">
                        <a className="text-xs leading-none lg:text-sm hover:text-brand text-white-800 text-white-50">
                          anything
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex w-full lg:w-1/2">
                <div className="w-full px-6 lg:w-1/2">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="text-xs leading-none lg:text-sm hover:text-brand text-white-800 text-white-50"
                      >
                        anything
                      </a>
                    </li>
                    <li className="mt-6">
                      <Link href="#">
                        <a className="text-xs leading-none lg:text-sm hover:text-brand text-white-800 text-white-50">
                          anything
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex w-full lg:w-1/2">
                  <div className="w-full px-6 lg:w-1/2">
                    <a href="#">
                      <div className="cursor-pointer text-white-800 text-white-50 hover:text-brand ">
                        <svg
                          className="footer-icon feather feather-github"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="#">
                      <div className="pl-4">
                        <svg
                          className="cursor-pointer footer-icon feather feather-twitter text-white-800 text-white-50 hover:text-brand "
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
