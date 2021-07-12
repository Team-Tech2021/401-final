import axios from "axios"
import { useState, useEffect } from "react"

// import { webFetchOne } from "../services/fetch"


export default function CodeEditor(props) {

    const [user, setUser] = useState('kuro')
    const [pass, setPass] = useState('kuro123')

    const [userId, setUserId] = useState(1)
    const [object, setObject] = useState('')
    const [problemId, setProblemId] = useState(0)
    const [codeText, setCodeText] = useState('')

    const baseUrl = 'kuro-space-rest-api.herokuapp.com/'
    const token = 'api/token/'
    const code = 'api/v1/code/'
    const problem = `api/v1/problem/`
    const compile = 'problems/compile/'




    async function webFetchAll() {
        const base = 'https://kuro-space-rest-api.herokuapp.com'
        try {
            const tokenResponse = await axios.post(base + '/api/token/', {
                username: "kuro",
                password: "kuro123",
            });
            const { refresh, access } = tokenResponse.data;
            const config = {
                headers: { Authorization: `Bearer ${access}` }
            };
            const problemsResponse = await axios.get(base + "/api/v1/problem/", config);
            // console.log(problemsResponse.data)
            return problemsResponse.data[0]
        } catch (error) {
            console.error(error);
        }
        return [];
    }



    // async function getToken(username, password) {
    //     console.log('inside get token funnn',await axios.post(`${baseUrl}api/token/`, {
    //         username,
    //         password
    //     }))
    //   }

    // async function getToken(username, password){
    //     const url = baseUrl + token
    //     const response = axios.post(url, {
    //         username,
    //         password
    //     })
    //     return response
    // }


    // console.log(webFetchAll(), 'webfetch');








    // async function getProblem(id){
    //     const response = await getToken(user, pass)

    //     const { access: token, refresh } = response.data
    //     const url = baseUrl + problem + id
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }
    //     return (await axios.get(url, config))
    // }

    const [starterCode, setStarterCode] = useState('')




    useEffect(() => {
        const getProblem = async () => {
            const data = await webFetchAll()
            console.log(data.starter);
            setStarterCode(data.starter)
        }
        getProblem()
    }, [])

    // export async function getStaticProps(){
    //     const res = await fetch(baseUrl+code)
    //     const data = await res.json()
    //     if (!data) {
    //       return {
    //         notFound: true,
    //       }
    //     }
    //     return {
    //       props: { data }, // will be passed to the page component as props
    //     }
    // }


    // async function getPreviousCode(idP, idU){
    //     const response = await getToken(user, pass)

    //     const url = baseUrl + code
    //     const { access: token, refresh } = response.data
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     }


    // let codeResponse = await axios.get(url, config)

    // try{
    //     codeResponse.objects
    //     codeResponse.data.problem == idP && codeResponse.data.user == 
    // }
    // return codeResponse.data
    // }

    // console.log(getPreviousCode(1,1));

    // setStarterCode(getPreviousCode(problemId).data.code)



    function handleTextArea(event) {
        setCodeText(event.target.value)
        return event.target.value
    }

    function checkCode(event) {



    }




    return (
        <div>
            <div>
                <h1>
                    title
                </h1>
                <p>description</p>
                <textarea id="codeEditor" name="code" onChange={handleTextArea} value={starterCode} />

            </div>
            <br />
            <button type="button" id="submit-button">Submit Code</button>
            <button type="button" id="check-button" onClick={checkCode}>Check Button</button>
            <br />
            <br />
            <div id="output">
                <h1>TestCase Output</h1>
            </div>
            <div id="raw">
                <h1>Raw Output</h1>
            </div>



        </div>
    )
}