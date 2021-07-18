import Image from "next/image";
import Header from "../components/Header";
import Head from "../components/Head";
import Footer from "../components/Footers/Footer";
import { useState } from "react";

export default function Contact() {
  const [title, setTitle] = useState("Contact");

  function startTimer(event) {
    setStart(true);
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header header={title} />
      <div>
        <h2>OUR TEAM </h2>
      </div>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        <div className="overflow-hidden rounded shadow-lg">
          <Image
            className="w-full"
            src="https://ca.slack-edge.com/TNGRRLUMA-U01KECL69R8-54826ed3b89d-512"
            alt="River"
            width={500}
            height={500}
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Mohammad Al-Momani</div>
           
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #photography
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #code
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #winter
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded shadow-lg">
          <Image
            className="w-full"
            src="https://ca.slack-edge.com/TNGRRLUMA-U01JZUJH5RV-dfc456658a17-512"
            alt="River"
            width={500}
            height={500}
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Rawan Abu Yasein</div>
           
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #photography
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #travel
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #summer
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded shadow-lg">
          <Image
            className="w-full"
            src="https://ca.slack-edge.com/TNGRRLUMA-U01KB2QE2JZ-0955462d2732-512"
            alt="River"
            width={500}
            height={500}
          />{" "}
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Manar Abo Rashed</div>
           
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #photography
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #travel
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #fall
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded shadow-lg">
          <Image
            className="w-full"
            src="https://ca.slack-edge.com/TNGRRLUMA-U01L4H74HQQ-284ee18aae45-512"
            alt="River"
            width={500}
            height={500}
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Mohammad Ashour </div>
           
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #photography
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #travel
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #summer
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
