import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Link from 'next/dist/client/link'
import { useState } from 'react'
import { fetchAll } from '../services/problems-fetcher'
import ProblemsList from '../components/ProblemsList'


export default function Home({problems}) {
  const [title,setTitle] = useState('kuro space');
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header header={title}/>
      <Link href="/timer"><a>Timer</a></Link>
      {/* <Main title={title} /> */}
      <ProblemsList problems={problems} />
      <Footer />
    </>
  )
}
export async function getStaticProps() {
  const problems = await fetchAll();
  return {
      props: { problems },
      revalidate: 1,
  }
}
