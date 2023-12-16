import React from "react";
import Logo from "../assets/Astral Studios.png";

const Nav = () => {
  return (
    <nav>
      <div className='nav_container'>
        <ul className='nav_links'>
          <li className='nav_item'>
            <a href='https://www.buymeacoffee.com/galondor' className='nav_link' target='_blank' rel='noreferrer'>
              Support
            </a>
          </li>
          <li className='nav_item'>
            <a href='https://discord.gg/H6Eh6Hf4JK' className='nav_link' target='_blank' rel='noreferrer'>
              Community
            </a>
          </li>
          <li className='nav_item middle_item'>
            <a href='/' className="nav_link">
              <img src={Logo} alt='Astral Studios' className='logo' />
            </a>
          </li>
          <li className='nav_item'>
            <a
              href='https://github.com/Galondor/AstralOdyssey/blob/0.7.1/README.md'
              className='nav_link'
              target='_blank'
              rel='noreferrer'
            >
              Tutorials
            </a>
          </li>
          <li className='nav_item'>
            <a
              href='https://github.com/Galondor/AstralOdyssey/releases/latest'
              className='nav_link'
              target='_blank'
              rel='noreferrer'
            >
              Play
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
