import './App.css';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Axios from 'axios';
import FileDownload from "js-file-download";


function App() {
  const [remainingTime, setRemainingTime] = useState({});
  const [code, setCode] = useState('');
  const download=(e)=>{
    e.preventDefault();
    Axios({
      url: "http://localhost:4000",
      method: "GET",
      responseType: "blob"
    }).then((res)=> {
      console.log(res);
      FileDownload(res.data,"AstralOdyssey.exe")
    })
  }

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

  return (
    <body>
      <div className="App">
        <h1 className="Countdown">{remainingTime.days} : {remainingTime.hours} : {remainingTime.minutes} : {remainingTime.seconds}</h1>
        <p className="Countdown_text">To Release</p>
        <input className="Password" type="text" value={code} onChange={handleCodeChange} onKeyDown={(event) => {
          if (event.key === 'Enter') {
            const accessCode = process.env.REACT_APP_ACCESS_KEY;
            if (code === "1") {
              alert('Correct!');
              download(event);
              setCode('');
              return;
            } else {
              alert('Incorrect!');
              setCode('');
              return;
            }
          }
        }} />
      </div>
      <Analytics />
    </body>
  );
}

export default App;
