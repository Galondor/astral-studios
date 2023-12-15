import "./App.css";
import Nav from "./components/Nav.jsx";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

function App() {
  const [remainingTime, setRemainingTime] = useState({});
  const [code, setCode] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("December 17, 2023 13:00:00 EST");
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        clearInterval(intervalId);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        const seconds = Math.floor((timeDiff / 1000) % 60);

        setRemainingTime({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <body>
      <div className='App'>
      <Nav />
        <div className='container'>
          <div className='row'>
          </div>
        </div>
      </div>
      <Analytics />
    </body>
  );
}

export default App;
