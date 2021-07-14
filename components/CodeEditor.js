import axios from "axios";
import { useState, useEffect } from "react";

export default function CodeEditor(props) {
  const [user, setUser] = useState("kuro");
  const [pass, setPass] = useState("kuro123");

  const [userId, setUserId] = useState(1);
  const [object, setObject] = useState("");
  const [codeText, setCodeText] = useState("");
  const [tokenCode, setTokenCode] = useState("");

  const baseUrl = "https://kuro-space-rest-api.herokuapp.com/";
  const token = "api/token/";
  const code = "api/v1/code/";
  const problem = `api/v1/problem/`;
  const compile = "problems/compile/";

  async function webFetchAll() {
    const base = "https://kuro-space-rest-api.herokuapp.com";
    try {
      const tokenResponse = await axios.post(base + "/api/token/", {
        username: "kuro",
        password: "kuro123",
      });
      const { refresh, access } = tokenResponse.data;
      setTokenCode(access);
      const config = {
        headers: { Authorization: `Bearer ${access}` },
      };
      const problemsResponse = await axios.get(
        base + "/api/v1/problem/",
        config
      );
      return problemsResponse.data;
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  const [starterCode, setStarterCode] = useState("");
  const [problemTitle, setProblemTitle] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [problemId, setProblemId] = useState(1);

  useEffect(() => {
    const getProblem = async () => {
      const data = await webFetchAll();
      data.map((problem) => {
        if (problem.id == problemId) {
          setStarterCode(problem.starter);
          setProblemTitle(problem.title);
          setProblemDescription(problem.description);
          setProblemId(problem.id);
        }
      });
    };
    getProblem();
  }, []);

  const [raw, setRaw] = useState("");
  const [output, setOutput] = useState("");
  const [errors, setErrors] = useState("");
  const [input, setInput] = useState("");
  const [passed, setPassed] = useState(true);
  const [status, setStatus] = useState("");
  const [errorState, setErrorState] = useState("");

  function handleTextArea(event) {
    setCodeText(event.target.value);
    return event.target.value;
  }

  async function webFetchCode() {
    // try{

    const tokenResponse = await axios.post(baseUrl + "api/token/", {
      username: "kuro",
      password: "kuro123",
    });
    const { refresh, access } = tokenResponse.data;
    setTokenCode(access);
    const config = {
      method: "post",
      headers: { Authorization: `Bearer ${access}` },
      url: `${baseUrl}${compile}`,
      data: { code: codeText, problem: problemId },
    };
    // console.log();
    // const { user } = useAuth0();
    // console.log("user id:", user.sub);

    const response = await axios(config);
    console.log(response.data);
    return response.data;
    // }catch(error){
    //     console.error(error)
    // }
  }

  async function getResult() {
    const data = await webFetchCode(); //make sure whether data is an object so it will be used as the following or it is an array so we should map over it
    setRaw(data.stdout);
    setErrors(data.error);
    setInput(data.input);
    setStatus(True);
  }

  function checkCode(event) {
    // event.preventDefault()
    // try{
    // useEffect(() => {
    // }, [])
    try {
      getResult();
    } catch (error) {
      console.error(error.response.data);
    }

    // }catch{
    // setStatus(false)
    // setErrorState('Oops! There is an error Please refresh the page to see if this will fix it, sorry fo the inconvenience')
    // }
  }

  function submitCode(event) {
    event.preventDefault();
  }

  return (
    <div className="flex flex-row w-full h-screen mb-20">
      <div className="flex flex-col w-1/2 ml-3 bg-white shadow-lg rounded-lg">
        <h1 className="m-3 text-4xl text-center">{problemTitle}</h1>
        <p className="m-3 text-lg">{problemDescription}</p>
      </div>
      <div className="w-1/2 h-full p-1 ml-5 bg-gray-100 shadow-lg rounded-lg mb-20">
        <textarea
          className="w-full p-1 font-bold text-white bg-gray-900  shadow-lg -12 rounded-lg h-3/4 mb-20 "
          id="codeEditor"
          name="code"
          onChange={handleTextArea}
          defaultValue={starterCode}
        />

        <div className="flex justify-between m-3 mb-20">
          <button
            className="bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl"
            type="button"
            id="check-button"
            onClick={checkCode}
          >
            Check Code
          </button>
          <button
            className="bg-red-500 p-4 text-white rounded hover:bg-red-700 hover:shadow-xl"
            type="button"
            id="submit-button"
            onClick={submitCode}
          >
            Submit Code
          </button>
        </div>

        <div
          id="output"
          className="bg-blue-500 w-full  text-black shadow-lg my-6   rounded-lg h-1/4 "
        >
          <h1>Output</h1>
          {status == true ? (
            errors.map((key) => {
              if (key != "passed") {
                <div>
                  <h4>Test case {errors.indexOf(key)}</h4> - <p>{key}</p>
                </div>;
              } else {
                <div>
                  <h4>Test Case {errors.indexOf(key)}</h4> - <p>{key}</p>
                </div>;
              }
            })
          ) : (
            <div>
              <h1>{errorState}</h1>
            </div>
          )}

          {status == true ? (
            errors.map((key) => {
              if (key !== "passed") {
                <h1>
                  You didn't pass all the tests, click run code button to check
                  your output
                </h1>;
                setPassed(false);
              }
              passed == true ? (
                <h1>Congratulations, you solved this problem</h1>
              ) : null;
            })
          ) : (
            <div>
              <h1>{errorState}</h1>
            </div>
          )}
        </div>
        <div id="raw">{raw}</div>
      </div>
    </div>
  );
}
