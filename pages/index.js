import Image from 'next/image'
import Whiteboard from '../components/whiteboard'
import styles from '../styles/Home.module.css'
import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/Main'
import ProblemsList from '../components/ProblemsList'
import Footer from '../components/Footer'

import {fetchAll} from '../services/problems-fetcher'
import { useState } from 'react'


export default function Home({problems}) {

  const [title,setTitle] = useState('kuro space');
  return (
    <div className="bg-white shadow">
      <Head title={title}/>
      <Header header={title}/>
      <Main title={title} />
      <ProblemsList problems={problems} />
      <Footer />
    </div>
  )
}
export async function getStaticProps() {
  const problems = await fetchAll();

  return {
      props: { problems },
      revalidate: 1,
  }

}
