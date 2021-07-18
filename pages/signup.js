import SignUp from '../components/LoginComponents/signup'
import Header from '../components/Header'
import Footer from '../components/Footers/Footer'
import { useState } from 'react'
export default function SignUpForm() {
    const [user, sesrUser] = useState("")

    function handleUser(e) {
        e.preventDefault()
        sesrUser(e.target.value)
       
    }

    return (
        <>
        <div className="flex flex-col justify-between h-screen" >

            < Header />
  
            <SignUp onClick={handleUser} ></SignUp>
        
             
        </div>
            < Footer />
            
        </>
    )
}

