import './App.css';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';


function App() {
  const [remainingTime, setRemainingTime] = useState({});
  const [remainingTime2, setRemainingTime2] = useState({});
  const [code, setCode] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const targetDate = new Date('December 17, 2023 13:00:00 EST');
      const targetDate2 = new Date('December 4, 2023 19:00:00 EST');
      const timeDiff = targetDate - now;
      const timeDiff2 = targetDate2 - now;

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

      if (timeDiff2 <= 0) {
        clearInterval(intervalId);
        setRemainingTime2({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDiff2 / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff2 / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((timeDiff2 / 1000 / 60) % 60);
        const seconds = Math.floor((timeDiff2 / 1000) % 60);

        setRemainingTime2({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <body>
      <div className="App">
        <h1 className="Countdown">{remainingTime.days} : {remainingTime.hours} : {remainingTime.minutes} : {remainingTime.seconds}</h1>
        <p className="Countdown_text">To Release</p>
        <h1 className="Countdown">{remainingTime2.days} : {remainingTime2.hours} : {remainingTime2.minutes} : {remainingTime2.seconds}</h1>
        <p className="Countdown_text">To Closed Beta</p>
        <input
          className="Password"
          type="text"
          value={code}
          onChange={handleCodeChange}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              const accessCode = process.env.REACT_APP_ACCESS_KEY;
              if (code === accessCode) {
                alert('Correct!');
                window.open(`${process.env.REACT_APP_GAME_LINK}`, '_blank');
                setCode('');
                return;
              } else {
                alert('Incorrect!');
                setCode('');
                return;
              }
            }
          }}
        />
      </div>
      <Analytics />
    </body>
  );
}

export default App;
