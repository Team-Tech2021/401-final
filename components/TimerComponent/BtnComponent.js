import React from "react";

function BtnComponent(props) {
  return (
    <div className="flex  ">
      {props.status === 0 ? (
        <button
          className="bg-blue-500 p-5  text-white rounded focus:bg-green-700 w-36 "
          onClick={props.start}
        >
          Start
        </button>
      ) : (
        ""
      )}

      {props.status === 1 ? (
        <div className="flex space-x-2 md:space-x-4">
          <button
            className="bg-yellow-500 p-5  text-white rounded focus:bg-red-700 w-36"
            onClick={props.stop}
          >
            Stop
          </button>
          <button
            className="bg-red-500 p-5  text-white rounded focus:bg-red-700 w-36"
            onClick={props.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}

      {props.status === 2 ? (
        <div className="flex space-x-2 md:space-x-2 ">
          <button
            className="bg-blue-500 p-5  text-white rounded focus:bg-red-700 w-36"
            onClick={props.resume}
          >
            Resume
          </button>
          <button
            className="bg-blue-500 p-5  text-white rounded focus:bg-red-700 w-36"
            onClick={props.reset}
          >
            Reset
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default BtnComponent;
