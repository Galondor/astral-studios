import "./App.css";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Version from "./components/Version.jsx";
import Classes from "./components/Classes.jsx";

import ChevronRight from "./assets/chevron-right.svg";
import ChevronLeft from "./assets/chevron-left.svg";

import Travel from "./assets/Travel.png";
import Path from "./assets/Path.png";
import Watchtower from "./assets/Watchtower.png";
import Swamp from "./assets/Swamp Fever.png";
import Town from "./assets/Town.png";
import Knight from "./assets/Knight.png";
import Mage from "./assets/Mage.png";
import Thief from "./assets/Thief.png";
import Combat from "./assets/Combat.png";
import Hard from "./assets/Hard.png";
import Insane from "./assets/Insane.png";
import Gladiator from "./assets/Gladiator.png";
import Armor from "./assets/Armor.png";
import Artifact from "./assets/Artifact.png";
import Staff from "./assets/Dropped Staff.png";
import Ring from "./assets/Ring.png";
import Loot from "./assets/Loot Drop.png";

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

  return (
    <body>
      <div className='App'>
        <Nav />
        <section id='Landing'>
          <div className='row'>
            <h1 className='section_header'>
              Astral Odyssey Open <span className='purple'>BETA</span> Now Live!
            </h1>
            <figure className='download_wrapper'>
              <img
                src={ChevronRight}
                alt='Chevron Right'
                className='arrow arrow_right'
              />
              <a
                href='https://github.com/Galondor/AstralOdyssey/releases/latest'
                target='_blank'
                rel='noreferrer'
                className='download_link'
              >
                Download <Version /> Now
              </a>
              <img
                src={ChevronLeft}
                alt='Chevron Left'
                className='arrow arrow_left'
              />
            </figure>
          </div>
        </section>
        <section id='Showcase'>
          <div className='container'>
            <div className='row'>
            <section id='Background'>
                <h1 className='section_header'>Background</h1>
                <p className="intro">This game originally started as a simple project for my final, but throughout development, I kept having "One" more idea
                And fell in love with making this game. I have always wanted to make games I just didn't believe I could do it. That being said I want anyone reading this
                whether you download and play or not, to know that you CAN do anything if you put your mind to it!
                Keep in mind I'm a solo developer, but I plan with your support to push through BETA and fully release the game in a state that both you and I can enjoy
                for years to come!</p>
              </section>
              <section id='Travel'>
                <h1 className='section_header'>Travel</h1>
                <h3 className='section_subheader'>
                  Through more than 8 unique regions with 70+ different
                  interactions! Each offering their own challenges and rewards!
                  Don't forget the dozens of hidden quests and secrets!
                </h3>
                <div className='travel_wrapper'>
                  <img
                    src={Travel}
                    alt='Placeholder'
                    className='showcase_image'
                  />
                  <figure className='travel'>
                    <img
                      src={Path}
                      alt='Placeholder'
                      className='showcase_image'
                    />
                    <img
                      src={Watchtower}
                      alt='Placeholder'
                      className='showcase_image'
                    />
                    <img
                      src={Swamp}
                      alt='Placeholder'
                      className='showcase_image'
                    />
                  </figure>
                </div>
              </section>
              <section id='Town'>
                <h1 className='section_header'>Town</h1>
                <h3 className='section_subheader'>
                  Visit town and prepare yourself for a grand adventure
                </h3>
                <div className='travel_wrapper'>
                  <img
                    src={Town}
                    alt='Placeholder'
                    className='showcase_image'
                  />
                </div>
              </section>
              <section id='Classes'>
                <h1 className='section_header'>Classes</h1>
                <h3 className='section_subheader'>
                  Choose from 3 powerful classes
                </h3>
                <div className='class_wrapper'>
                  <Classes Class='Knight' Src={Knight} />
                  <Classes Class='Thief' Src={Thief} />
                  <Classes Class='Mage' Src={Mage} />
                </div>
              </section>
              <section id='Combat'>
                <h1 className='section_header'>Combat</h1>
                  <h3 className='section_subheader'>
                    Battle against fearsome foes, and even challenge yourself with higher difficulties!
                  </h3>
                  <div className='combat_wrapper'>
                  <img
                    src={Combat}
                    alt='Placeholder'
                    className='showcase_image'
                  />
                  <img
                    src={Gladiator}
                    alt='Placeholder'
                    className='showcase_image'
                  />
                  <img
                    src={Hard}
                    alt='Placeholder'
                    className='showcase_image'
                  />
                  <img
                    src={Insane}
                    alt='Placeholder'
                    className='showcase_image'
                  />
                  </div>
              </section>
              <section id='Loot'>
                <h1 className='section_header'>Loot</h1>
                  <h3 className='section_subheader'>
                    With an endless amount of randomized loot, build craft and min-max to your hearts content!
                  </h3>
                  <img
                    src={Loot}
                    alt='Placeholder'
                    className='showcase_image'
                  />
                  <div className='combat_wrapper'>
                  <img
                    src={Staff}
                    alt='Placeholder'
                    className='showcase_image'
                  />
                  <img
                    src={Armor}
                    alt='Placeholder'
                    className='showcase_image'
                  />
                  <img
                    src={Ring}
                    alt='Placeholder'
                    className='showcase_image'
                  />
                  </div>
                  <h3 className='section_subheader'>
                    Hunt down powerful build defining artifacts!
                  </h3>
                  <img
                    src={Artifact}
                    alt='Placeholder'
                    className='showcase_image'
                  />
              </section>
            </div>
          </div>
        </section>
      </div>
      <Analytics />
      <Footer />
    </body>
  );
}

export default App;
