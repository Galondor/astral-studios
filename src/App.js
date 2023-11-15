import './App.css';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';


function App() {
  const [remainingTime, setRemainingTime] = useState({});
  const [code, setCode] = useState('');

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

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };
  fetch('/Astral Odyssey/AstralOdyssey.exe')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const contentType = 'application/octet-stream';
      return response.blob();
    })
    .then(blob => {
      // ...
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });

  return (
    <body>
      <div className="App">
        <h1 className="Countdown">{remainingTime.days} : {remainingTime.hours} : {remainingTime.minutes} : {remainingTime.seconds}</h1>
        <p className="Countdown_text">To Release</p>
        <input className="Password" type="text" value={code} onChange={handleCodeChange} onKeyDown={(event) => {
          if (event.key === 'Enter') {
            switch (code) {
              case 'AstralOdysseyPreAlphaV0.3.7.0release':
                alert('Correct!');
                setCode('');
                break;
              default:
                alert('Incorrect!');
                setCode('');
                break;
            }
          }
        }} />
      </div>
      <Analytics />
    </body>
  );
}

export default App;
