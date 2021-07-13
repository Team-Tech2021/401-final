import Whiteboard from '../components/whiteboard'
import CodeEditor from '../components/CodeEditor'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Board(){

    return(
        <div>
            <Head>
                <title>Board</title>
            </Head>
            <Header title="Board" className="border border-black"/>
            <CodeEditor />
            {/* <Whiteboard /> */}
            <Footer />
        </div>
    )

}