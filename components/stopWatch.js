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
          <p className="mr-5 text-2xl text-right">
            Timer: { formatted }
          </p>

        </div>
      );
    }}
   />
);
 
export default Stopwatch;