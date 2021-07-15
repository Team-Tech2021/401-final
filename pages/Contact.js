import Image from "next/image";
import Header from "../components/Header";
import Head from "../components/Head";
import Footer from "../components/Footer";
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
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="https://ca.slack-edge.com/TNGRRLUMA-U01KECL69R8-54826ed3b89d-512"
            alt="River"
            width={500}
            height={500}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mohammad Al-Momani</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #code
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="https://ca.slack-edge.com/TNGRRLUMA-U01JZUJH5RV-dfc456658a17-512"
            alt="River"
            width={500}
            height={500}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Rawan Abo Yasen</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #summer
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="https://ca.slack-edge.com/TNGRRLUMA-U01KB2QE2JZ-0955462d2732-512"
            alt="River"
            width={500}
            height={500}
          />{" "}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Manar Abo Rashed</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg">
          <Image
            className="w-full"
            src="https://ca.slack-edge.com/TNGRRLUMA-U01L4H74HQQ-284ee18aae45-512"
            alt="River"
            width={500}
            height={500}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mohammad Ashour </div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #summer
            </span>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
