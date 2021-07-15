
import Link from "next/dist/client/link"
import Footer from "../Footer"
export default function LoginForm({submitLogin}) {
    function handleLogin(e) {
        e.preventDefault()
        const userData = {
            'username': e.target.username.value,
            'password':e.target.password.value
        }
        submitLogin(userData)
    }
    return (
        <body className="body-bg min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0" >
        <span className="max-w-lg mx-auto text-center mt-12 mb-6">
        <section>
            <h2 className="font-bold text-2xl">Welcome to Kuro Space</h2>
        </section>
        <section className="mt-10">
            <form className="flex flex-col" onSubmit={handleLogin}>
            <div className="min-h-screen flex items-center justify-center bg-blue-400">

                
            <div className="bg-white p-16 rounded shadow-2xl w-2/3">

            <h2 className="text-3xl font-bold mb-10 text-gray-800">Sign in to your account</h2>
            <div className="md:w-full max-w-2xl mx-auto px-4 py-5 shadow-none">
                
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" >User Name</label>
                    <input className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"type="text" id="username" placeholder="Enter your ysername" name="username" required/>
                    <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">Password</label>
                    <input className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"type="password" id="password" placeholder="Enter your password" name="password" required/>
            </div>
                    <button  class="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300" type="submit">Sign in</button>
                    <div className="max-w-lg mx-auto text-center mt-12 mb-6">
                    <p className="text-black font-bold ">First Time? <Link href="/signup" className="font-bold hover:underline">Sign up</Link>.</p>
            </div>
          
            </div> 
            </div>
            </form>
        </section>
        </span>
        <Footer></Footer>
    </body>
  
    )
}
