import { useState } from 'react'


export default function Login({change}){    
  const [userName,setUserName] = useState("") 
  const [password,setPassword] = useState("")    
  function changeUser(event){
    setUserName(event.target.value)
    }

    function changePassword(event){
        setPassword(event.target.value)
    }

    function login(){
        change(userName,password)
    }

    return (
        <div className="w-full flex justify-center pt-3 ">
            <form className="px-8 pt-6 pb-8 mb-4 bg-green-200 rounded shadow-md " >
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                        Username
                    </label>
                    <input name="username" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={changeUser}/>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-bold text-gray-700" >
                        Password
                    </label>
                    <input name="password" className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={changePassword}/>
                </div>
                <div className="flex items-center justify-center">
                    <button onClick={login}  className="px-4 py-2 font-bold text-white bg-green-700 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}



// import { useState } from 'react'
// // Context
// export default function LoginForm({ onSubmit }) {

//     const initialValues = {
//         username: '',
//         password: '',
//     }

//     const [values, setValues] = useState(initialValues);

//     function submitHandler(event) {
//         event.preventDefault();
//         console.log(values,"+++++++++++++++++++++++")
//         onSubmit(values);
//         setValues(initialValues)
//     }

//     function inputChangeHandler(event) {

//         let { name, value } = event.target;

//         setValues({ ...values, [name]: value });
//     }

//     return (
//     <div className="w-full max-w-xs">
//         <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//         Username
//       </label>
//       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name"/>
//     </div>
//     <div className="mb-6">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//         Password
//       </label>
//       <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password"/>
//       <p className="text-red-500 text-xs italic">Please choose a password.</p>
//     </div>
//     <div className="flex items-center justify-between">
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
//         Sign In
//       </button>
//     </div>
//   </form>
// </div>
//     );
// }