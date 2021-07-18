import axios from "axios";
import { useState, useEffect } from "react";

export default function CodeEditor(props) {
  const [user, setUser] = useState("kuro"); //username
  const [pass, setPass] = useState("koko@123"); //password

  const [codeText, setCodeText] = useState(""); // This will have the code and will be encoded
  const [tokenCode, setTokenCode] = useState(""); // for token so we use it in the calls

  const baseUrl = "https://kuro-space-rest-api.herokuapp.com/";
  const token = "api/token/"; //gets token for login {post}
  const code = "api/v1/code/"; //gets the previous code {get}
  const problem = `api/v1/problem/`; //gets the problem {get}
  const compile = "problems/compile/"; // checks the if the code  is correct {post} don't use
  const check = "problems/check-code/"; // checks the if the code  is correct {post}
  const checkPass = "api/v1/passed/"; // checks if the problem is solved before

  async function webFetchAll() {
    /**
     * This function will get the token then gets all the problems
     */
    try {
      const tokenResponse = await axios.post(baseUrl + token, {
        username: "kuro",
        password: "koko@123",
      });
      const { refresh, access } = tokenResponse.data;
      setTokenCode(access);
      const config = {
        headers: { Authorization: `Bearer ${access}` },
      };
      const problemsResponse = await axios.get(baseUrl + problem, config);
      return problemsResponse.data; //The return is array of problems
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  const [starterCode, setStarterCode] = useState("");
  const [problemTitle, setProblemTitle] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [problemId, setProblemId] = useState(props.id);
  const [hint, setHint] = useState("");

  // console.log({ problemmm: problemId });

  //Gets the problem that has the id given from the problems page
  useEffect(() => {
    const getProblem = async () => {
      const data = await webFetchAll();
      data.map((problem) => {
        if (problem.id == problemId) {
          setStarterCode(problem.starter);
          setProblemTitle(problem.title);
          setProblemDescription(problem.description);
          setProblemId(problem.id);
          setHint(problem.hint);
        }
      });
    };
    getProblem();
  }, []);

  const [output, setOutput] = useState("");
  const [passed, setPassed] = useState(true);
  const [status, setStatus] = useState(false); //to see if submit button is pressed
  const [errorState, setErrorState] = useState("");
  const [stdOut, setStdOut] = useState("");
  const [passState, setPassState] = useState("");
  const [codeCheck, setCodeCheck] = useState(false); // to see if the check button is pressed
  const [submitOutput, setSubmitOutput] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [atLeastOneFailed, setAtLeastOneFailed] = useState("");
  const [shouldPassAll, setShouldPassAll] = useState("");
  const [AllPassed, setAllPassed] = useState("");

  function handleTextArea(event) {
    let text = event.target.value;
    setCodeText(encodeURIComponent(text));

    return event.target.value;
  }

  // Check Code Button
  async function webFetchCode() {
    /**
     * This will get the test result
     */

    const tokenResponse = await axios.post(baseUrl + "api/token/", {
      username: "kuro",
      password: "koko@123",
    });
    const { refresh, access } = tokenResponse.data;

    setTokenCode(access);
    // console.log(access);
    const config = {
      method: "post",
      headers: { Authorization: `Bearer ${access}` },
      url: `${baseUrl}${check}`,
      data: { code: codeText, problem: problemId },
    };
    const response = await axios(config);
    return response.data;
  }

  async function getResult() {
    const data = await webFetchCode(); //make sure whether data is an object so it will be used as the following or it is an array so we should map over it
    setStdOut(data.data);
    setAtLeastOneFailed("At least one test failed");
    setPassState(data.pass);
    setAtLeastOneFailed("");
  }

  function checkCode(event) {
    try {
      setStdOut("");
      getResult();
      setCodeCheck(true);
    } catch (error) {
      console.error(error.response.data);
      setErrorState(
        "Oops! There is an error Please refresh the page to see if this will fix it, sorry fo the inconvenience"
      );
      setStatus(false);
    }
  }

  //////Submit Code Button
  async function webFetchSubmit() {
    /**
     * This function will add the code to the passed table
     */
    const tokenResponse = await axios.post(baseUrl + "api/token/", {
      username: "kuro",
      password: "koko@123",
    });
    const { refresh, access } = tokenResponse.data;
    setTokenCode(access);
    const config = {
      method: "post",
      headers: { Authorization: `Bearer ${access}` },
      url: `${baseUrl}${compile}`,
      data: { code: codeText, problem: problemId },
    };
    const response = await axios(config);
    return response.data;
  }
  async function submitResult() {
    const data = await webFetchSubmit(); //make sure whether data is an object so it will be used as the following or it is an array so we should map over it
    setStdOut(data.data);
    setSubmitOutput("Your solution has been submitted successfully");
    // alert('Your solution has been submitted successfully')
    setStatus(true);
  }
  async function submitCode(event) {
    event.preventDefault();
    setSubmitError("");
    setSubmitOutput("");
    const data = await webFetchCode();
    data.pass
      ? submitResult()
      : setSubmitError(
          "You have to pass all the tests in order to submit your result"
        );
  }

  function popUp(event) {
    event.preventDefault();
    alert(hint);
  }

  return (
    <div className="flex flex-row w-full h-screen mb-20">
      <div className="flex flex-col w-1/2 ml-3 bg-white shadow-lg rounded-lg">
        <h1 className="m-3 text-4xl text-center">{problemTitle}</h1>
        <p className="m-3 text-lg">{problemDescription}</p>
      </div>
      <div className="w-1/2 h-full p-1 ml-5 bg-gray-100 shadow-lg rounded-lg mb-20">
        <textarea
          tabIndex="2"
          className="w-full p-1 font-bold text-white bg-gray-900  shadow-lg -12 rounded-lg h-3/4 mb-20 "
          id="codeEditor"
          name="code"
          onChange={handleTextArea}
          defaultValue={starterCode}
        />

        <br />
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
            className="bg-green-500 p-4 text-white rounded hover:bg-green-700 hover:shadow-xl"
            onClick={popUp}
          >
            hint
          </button>
          <button
            className="p-4 text-white bg-red-500 rounded hover:bg-red-700 hover:shadow-xl"
            type="button"
            id="submit-button"
            onClick={submitCode}
          >
            Submit Code
          </button>
        </div>
        <div
          id="output"
          className="w-full my-6 overflow-scroll text-black bg-blue-500 rounded-lg shadow-lg h-1/4 "
        >
          <h1>Output</h1>
          {passState ? (
            <div>
              <p>{stdOut}</p>

              <p className="text-green-500">All Tests Passed</p>
            </div>
          ) : codeCheck ? (
            <div>
              <p>{stdOut}</p>
              <p className="text-red-600">'At least one test failed'</p>
            </div>
          ) : (
            <p>{stdOut}</p>
          )}
          {status == true ? (
            <div>
              <p>{submitResult}</p>
            </div>
          ) : (
            <div>
              <p>{submitError}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
