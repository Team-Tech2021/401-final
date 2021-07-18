import Header from "../components/Header";
import Head from "next/dist/next-server/lib/head";
import Whiteboard from '../components/whiteboard';
import Footer from "../components/Footers/Footer";




export default function WhiteboardPage(){

    return(
        <>
        <Head><title>Whiteboard</title></Head>
        <Header></Header>
        <Whiteboard />  
        <Footer />

        </>
    )
}