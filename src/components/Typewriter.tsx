import React from 'react';
import Typewriter from 'typewriter-effect';
import './Typewriter.css';

const TypewriterComponent: React.FC = () => {
  return (
    <div className="container">
      <h1>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            deleteSpeed: 40,
            strings: ["Francisco Suárez", "San Francisco"]
          }}
        />
      </h1>
    </div>
  );
};

export default TypewriterComponent;