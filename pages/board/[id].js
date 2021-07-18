import Whiteboard from '../../components/whiteboard'
import CodeEditor from '../../components/CodeEditor'
import Head from 'next/head'
import Header from '../../components/Header'
import Footer from '../../components/Footers/Footer'
import Link from 'next/dist/client/link'
import Stopwatch from '../../components/stopWatch'
import { useState } from 'react'
import { className } from 'postcss-selector-parser'
import problemId from '../../components/ProblemsList'
import Timer from '../timer'




export default function Board({ problem }) {
    const [start, setStart] = useState(false)

    function startTimer(event) {
        setStart(true)
    }
    return (
        <div className="overflow-x-hidden bg-gray-300">
            <Head>
                <title>Board</title>
            </Head>
            <Header title="Board" className="text-right border border-black" />
            <div className="grid grid-cols-2 gap-2 p-5 place-items-center">
                {/* <button onClick={startTimer} className="p-5 text-white bg-blue-500 rounded focus:bg-red-700 w-36">Start</button>
            {
                start &&   
                <Stopwatch />
            } */}
                <Timer />
            </div>


            <div className="flex flex-col">
                <CodeEditor className="w-screen" id={problem} />
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

                <Whiteboard className="" />
            </div>
            <Footer />
        </div>
    )

}

export async function getServerSideProps(context) {
    const id = context.query.id
    return { props: { problem: id } }
}