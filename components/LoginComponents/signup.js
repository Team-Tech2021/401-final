
import {postData} from '../../pages/posts'
import { useState } from 'react'

export default function SignUp() {

    function signUp(e){
        e.preventDefault()
        const signData = {
            email: e.target.email.value,
            password: e.target.password.value,
            username: e.target.username.value,
        }
        postData(signData, 'signup')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-400">

       
        <div className="bg-white p-16 rounded shadow-2xl w-2/3">

        <h2 className="text-3xl font-bold mb-10 text-gray-800">Create Your Account</h2>
        <div className="md:w-full max-w-2xl mx-auto px-4 py-5 shadow-none">
            <form onSubmit={signUp} class="space-y-5">
            
                <div className="mt-5">
                    <label htmlFor="email" class="block mb-1 font-bold text-gray-500">Email</label>
                    <input type="text" name="email" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" placeholder="Email"/>
                </div>

            
                <div className="mt-5">
                    <label htmlFor="username"class="block mb-1 font-bold text-gray-500">Username</label>
                    <input type="text" name="username"  className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" placeholder="User-name"/>
                </div>
                
     
                <div className="mt-5">
                    <label htmlFor="password" class="block mb-1 font-bold text-gray-500">Password</label>
                    <input type="password" name="password"  className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"  placeholder="Password"/>
                </div>
               
                    {/* <input type="checkbox" id="agree">
                    <label className="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label> */}
          
                <div className="mt-10">
                    <button type="submit" class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign up</button>
                </div>
           
            </form>
        </div>
        </div>
        </div>
    )
}


  {/* <form class="space-y-5">

    <div>
      <label class="block mb-1 font-bold text-gray-500">Name</label>
      <input type="text" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
    </div>

    <div>
      <label class="block mb-1 font-bold text-gray-500">Email</label>
      <input type="email" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
    </div>

    <div>
      <label class="block mb-1 font-bold text-gray-500">Password</label>
      <input type="password" class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500">
    </div>

    <div class="flex items-center">
      <input type="checkbox" id="agree">
      <label for="agree" class="ml-2 text-gray-700 text-sm">I agree to the terms and privacy.</label>
    </div>

    <button class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign Up</button>

  </form>

</div>

</div> */}