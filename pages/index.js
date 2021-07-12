import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import ProblemsList from '../components/ProblemsList'
import Footer from '../components/Footer'

import {fetchAll} from '../services/problems-fetcher'
import { useState } from 'react'


export default function Home({problems}) {

  const [title,setTitle] = useState('kuro space');
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header header={title}/>
      <Main title={title} />
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
