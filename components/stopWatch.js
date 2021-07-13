import * as React from 'react';
import ReactStopwatch from 'react-stopwatch';
 
const Stopwatch = () => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit="01:00:00"
    onChange={({ hours, minutes, seconds }) => {
      // do something
    }}
    onCallback={() => console.log('Finish')}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        <div>
          <p className="rounded text-2xl  text-white bg-gray-800 p-5 w-60">
            Timer: { formatted }
          </p>

        </div>
      );
    }}
   />
);
 
export default Stopwatch;