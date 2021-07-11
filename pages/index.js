import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { useState } from 'react'


export default function Home() {

  const [title,setTitle] = useState('kuro space');
  return (
    <div className="bg-white shadow">
      <Head title={title}/>
      <Header header={title}/>
      <Main title={title} />
      <Footer />
    </div>
  )
}
