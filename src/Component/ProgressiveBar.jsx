import { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";

function ProgressExample({ num }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === num) {
          clearInterval(interval);
        }
        return Math.min(oldProgress + 10, num);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <ProgressBar now={progress} label={`${progress}%`} />
    </div>
  );
}

export default ProgressExample;

// npm install react-bootstrap bootstrap
