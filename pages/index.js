import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { useState } from 'react'


export default function Home() {

  const [title,setTitle] = useState('kuro space');
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header header={title}/>
      <Main title={title} />
      <Footer />
    </>
  )
}
