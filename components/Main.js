/* eslint-disable react/jsx-key */
import { useState } from "react";
import Image from "next/image";

export default function Main(props) {
  const [data, setData] = useState([
    {
      id: "#1",
      problem: "problem1",
      description: "description1",
      level: "level 1",
    },

    {
      id: "#2",
      problem: "problem2",
      description: "description2",
      level: "level 2",
    },

    {
      id: "#3",
      problem: "problem3",
      description: "description3",
      level: "level 3",
    },
  ]);

  return (
    <main className="container grid mx-auto ">
      <h2 className="m-10 text-3xl font-bold text-gray-900 justify-self-center mb-80">
        Welcome
      </h2>
      <h2 className="mb-2 text-xl font-bold text-gray-900 justify-self-center">
        {" "}
        Problems list
      </h2>

      {/* <image src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg" alt="logo" /> */}
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
        {data.map((item) => (
          <div>
            <a href={item.id} className="w-full lg:max-w-full ">
              <div
                className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
                styles="background-image: url('/mountain.jpg')"
              ></div>
              <div className="flex flex-col justify-between p-4 leading-normal bg-white border-gray-400 rounded-b  lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">
                <div className="mb-8">
                  <div className="mb-2 text-xl font-bold text-gray-900">
                    {item.problem}{" "}
                  </div>
                  <p className="text-base text-gray-700">
                    {item.description} 
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="text-sm">
                    <p className="leading-none text-gray-900">level</p>
                    <p className="text-gray-600">{item.level}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
