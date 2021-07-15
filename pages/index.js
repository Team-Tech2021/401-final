import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import Link from 'next/dist/client/link'
import { useState } from 'react'
import { fetchAll } from '../services/problems-fetcher'
import ProblemsList from '../components/ProblemsList'
import LoginForm from '../components/LoginComponents/login'
import axios from 'axios'


export default function Home({problems}) {
  const [title,setTitle] = useState('kuro space');
  const [tokens, setTokens] = useState()
  const [isLoggedIn, setLoggedIn] = useState(false)
  async function getToken(userData) {
    // this function get tokens from API using the username and password
    try {
      const url = 'https://kuro-space-rest-api.herokuapp.com/api/token/'
      const response = await axios.post(url, userData)
      setTokens(response.data)
      setLoggedIn(true)
    } catch (err) {

    }

  }
  
  return (
    <>
    {isLoggedIn ?
      <>
      <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header header={title}/>
      <ProblemsList problems={problems} />
      <Footer />
      </div>
      </>
        :
        <LoginForm submitLogin={getToken} />      
      }
   
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
