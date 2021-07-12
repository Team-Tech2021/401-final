import Head from '../components/Head'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import LoginForm from '../components/Login'
import Admin from '../components/Admin'
import { Component, useState } from 'react'
import { getToken } from '../services/data-fetcher'

export default function Home() {

  const [savedPassword,setsavedPassword] = useState('test')
  const [logged,setLogged] = useState(false)
  const [title,setTitle] = useState('kuro space');
  const [token, setToken] = useState();
  const [userName, setUserName] = useState('');

  async function loginHandler(values) {

      const fetchedToken = await getToken(values);

      setToken(fetchedToken);

      setUserName(values.userName);
  }

  function change(username,password){
    if (userName == userName && password == savedPassword){
      setLogged(true);
    }
  }  return (
    <div className="bg-green-100">
      {logged ? <Admin userName={userName} password={savedPassword}/> : <LoginForm onSubmit={change}/>}
    </div>
  )

  function logoutHandler() {
      setToken(null);
  }

  if (!token) return (    <div className="bg-white shadow">
  <Head title={title}/>
  <Header header={title}/>
  <LoginForm/>
  <Footer />
</div>
)
  
  
  return (
    
    <div className="bg-white shadow">
      <Head title={title}/>
      <Header header={title}/>
      <Main title={title} />
      <Footer />
    </div>
  )


}

