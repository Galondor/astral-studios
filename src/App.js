import './App.css';
import { useState, useEffect } from 'react';


function App() {
  const [remainingTime, setRemainingTime] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const targetDate = new Date('December 17, 2023 13:00:00 EST');
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

  return (
    <body>
      <div className="App">
        <h1 className="Countdown">{remainingTime.days} : {remainingTime.hours} : {remainingTime.minutes} : {remainingTime.seconds}</h1>
        <p className="Countdown_text">To Release</p>
      </div>
    </body>
  );
}

export default App;
