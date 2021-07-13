import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Link from 'next/dist/client/link'
import { useState } from 'react'


export default function Home() {

  const [title,setTitle] = useState('kuro space');
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header header={title}/>
      <Link href="/timer" className="text-right"><a>Timer</a></Link>
      <Main title={title} />
      <Footer />
    </>
  )
}
