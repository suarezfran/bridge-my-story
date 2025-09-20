import React from 'react';
import Typewriter from 'typewriter-effect';
import './Typewriter.css';

function Typewriters() {
  return (
    <div className="container">
      <h1>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            strings: ["Francisco Suarez", "San Francisco"] // <-- multiple strings here
          }}
        />
      </h1>
    </div>
  );
}

export default Typewriters;