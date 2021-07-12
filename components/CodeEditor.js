import axios from "axios"
import { useState, useEffect } from "react"


export default function CodeEditor(props) {

    const [user, setUser] = useState('kuro')
    const [pass, setPass] = useState('kuro123')

    const [userId, setUserId] = useState(1)
    const [object, setObject] = useState('')
    const [codeText, setCodeText] = useState('')
    const [tokenCode, setTokenCode] = useState('')

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
            setTokenCode(access)
            const config = {
                headers: { Authorization: `Bearer ${access}` }
            };
            const problemsResponse = await axios.get(base + "/api/v1/problem/", config);
            return problemsResponse.data
        } catch (error) {
            console.error(error);
        }
        return [];
    }


    const [starterCode, setStarterCode] = useState('')
    const [problemTitle, setProblemTitle] = useState('')
    const [problemDescription, setProblemDescription] = useState('')
    const [problemId, setProblemId] = useState(1)



    useEffect(() => {
        const getProblem = async () => {
            const data = await webFetchAll()
            data.map(problem => {
                if (problem.id == problemId) {
                    setStarterCode(problem.starter)
                    setProblemTitle(problem.title)
                    setProblemDescription(problem.description)
                    setProblemId(problem.id)
                }
            })
        }
        getProblem()
    }, [])

    const [raw, setRaw] = useState('')
    const [output, setOutput] = useState('')
    const [errors, setErrors] = useState('')
    const [input, setInput] = useState('')
    const [passed, setPassed] = useState(true)
    const [status, setStatus] = useState(true)


    function handleTextArea(event) {
        setCodeText(event.target.value)
        return event.target.value
    }

    async function webFetchCode() {
        const tokenResponse = await login('kuro', 'kuro123')
        const { refresh, access: token } = tokenResponse.data;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const response = await axios.get(`${baseUrl}${compile}?code=${codeText}&problem=${problemId}&user=${userId}&token=${tokenCode}`);
        return response.data;
    }

    function checkCode(event) {
        event.preventDefault()
        try{

            useEffect(() => {
                const getResult = async () => {
                    const data = await webFetchCode() //make sure whether data is an object so it will be used as the following or it is an array so we should map over it
                    setRaw(data.stdout)
                    setErrors(data.error)
                    setInput(data.input)
                    setStatus(True)
                }
                getResult()
            }, [])

            
        }catch{
                setStatus(false)
        }
    }

    function submitCode(event){
        event.preventDefault()


    }








    return (
        <div>
            <div>
                <h1>
                    {problemTitle}
                </h1>
                <p>{problemDescription}</p>
                <textarea id="codeEditor" name="code" onChange={handleTextArea} value={starterCode} />

            </div>
            <br />
            <button type="button" id="submit-button" onClick={submitCode}>Submit Code</button>
            <button type="button" id="check-button" onClick={checkCode}>Check Button</button>
            <br />
            <br />
            <div id="output">
                <h1>Output</h1>
                { status == true?
                    errors.map(key => {

                        if (key != 'passed') {
                            <br>
                                <h4>Test case {errors.indexOf(key)}</h4> - <p>{key}</p>
                            </br>
                        } else {
                            <br><h4>Test Case {errors.indexOf(key)}</h4> - <p>{key}</p></br>
                        }
                    }):
                    <br><h1>Oops! There is an error Please refresh the page to see if this will fix it, sorry fo the inconvenience</h1></br>
                }


                {
                    status == true?
                    errors.map(key=>{
                        if (key !== 'passed') {
                            <h1>You didn't pass all the tests, click run code button to check your output</h1>
                            setPassed(false)
                        }
                    }):
                    <br><h1>Oops! There is an error Please refresh the page to see if this will fix it, sorry fo the inconvenience</h1></br>
                }
                {
                    passed == true ? <h1>Congratulations, you solved this problem</h1> : null

                }

            </div>
            <div id="raw">
                {raw}
            </div>



        </div>
    )
}