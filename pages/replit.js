import Header from "../components/Header";
import Head from "next/dist/next-server/lib/head";
import Footer from "../components/Footers/Footer";


export default function(){

    return (
        <>
        <Head><title>Code Editor</title></Head>
        <Header/>
        <div className="bg-white border border-black"></div>
        <iframe frameborder="0" width="100%" height="100%" src="https://create.withcode.uk/" className="h-screen "></iframe>
        <Footer/>
        </>
    )
}