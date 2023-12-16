import React from "react";
import Discord from "../assets/Discord.svg";
import Coffee from "../assets/Coffee.svg";

const Footer = () => {
  return (
    <footer>
      <div className='footer_container'>
        <ul className='footer_links'>
          <li className='footer_item'>
            <a
              href='https://www.buymeacoffee.com/galondor'
              className='footer_link'
              target='_blank'
              rel='noreferrer'
            >
              Support
            </a>
          </li>
          <li className='footer_item'>
            <a
              href='https://discord.gg/H6Eh6Hf4JK'
              className='footer_link'
              target='_blank'
              rel='noreferrer'
            >
              Community
            </a>
          </li>
          <li className='footer_item'>
            <a
              href='https://github.com/Galondor/AstralOdyssey/blob/0.7.1/README.md'
              className='footer_link'
              target='_blank'
              rel='noreferrer'
            >
              Tutorials
            </a>
          </li>
          <li className='footer_item'>
            <a
              href='https://github.com/Galondor/AstralOdyssey/releases/latest'
              className='footer_link'
              target='_blank'
              rel='noreferrer'
            >
              Play
            </a>
          </li>
        </ul>
      </div>
      <div className='logo_link-container'>
        <a
          href='https://discord.gg/H6Eh6Hf4JK'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Discord} className='logo_link'></img>
        </a>
        <a
          href='https://www.buymeacoffee.com/galondor'
          target='_blank'
          rel='noreferrer'
        >
          <img src={Coffee} className='logo_link'></img>
        </a>
      </div>
      <span className='copyright'>
        Copyright 2023 Astral Studios. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
