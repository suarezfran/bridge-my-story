import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './Typewriter.css';

const TypewriterComponent: React.FC = () => {
  const [secondaryText, setSecondaryText] = useState('Why must');
  const [isVisible, setIsVisible] = useState(true);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari and Chrome browsers
    const userAgent = navigator.userAgent;
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);
    const isChromeBrowser = /chrome/i.test(userAgent) && !/edge/i.test(userAgent);
    
    // Test if background-clip: text is supported
    const testElement = document.createElement('div');
    testElement.style.backgroundClip = 'text';
    const supportsBackgroundClip = testElement.style.backgroundClip === 'text';
    
    // Apply fallback for Safari or if background-clip: text is not supported
    setIsSafari(isSafariBrowser || isChromeBrowser || !supportsBackgroundClip);

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setSecondaryText(prev => prev === 'Why must' ? 'Go to' : 'Why must');
        setIsVisible(true);
      }, 500); // Fade out duration
      
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className={`secondary-text ${isVisible ? 'fade-in' : 'fade-out'}`}>
        {secondaryText}
      </div>
      <h1 className={isSafari ? 'text-fallback' : ''}>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
            strings: ["Francisco Suárez", "San Francisco"]
          }}
        />
      </h1>
    </div>
  );
};

export default TypewriterComponent;