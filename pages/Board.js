import Whiteboard from "../components/whiteboard";
import CodeEditor from "../components/CodeEditor";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/dist/client/link";
import Stopwatch from "../components/stopWatch";
import { useState } from "react";
import { className } from "postcss-selector-parser";
import Timer from "./timer";

export default function Board() {
  const [start, setStart] = useState(false);

  function startTimer(event) {
    setStart(true);
  }

  return (
    <div className="overflow-x-hidden bg-gray-300">
      <Head>
        <title>Board</title>
      </Head>
      <Header title="Board" className="text-right border border-black" />
      <div className="flex space-x-2 md:space-x-8">
        <Timer />
      </div>

      <div className="flex flex-col">
        <CodeEditor className="w-screen" />
        <Whiteboard />
      </div>
      <Footer />
    </div>
  );
}
