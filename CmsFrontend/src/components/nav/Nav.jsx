import React, { useState } from 'react';
import './Nav.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';


const li = [
  {
    link: '/',
    text: 'DashBoard'
  },
  {
    link: '/',
    text: 'Posts'

  },
  {
    link: '/',
    text: 'Top posts'
  },
  {
    link: '/',
    text: 'Settings'
  }


];

const SideDraw = ({ show, click }) => {
  const drawClasses = show ? 'sidebar active' : 'sidebar';

  return (
    <nav className={drawClasses}>
      <button className="close-btn" onClick={click}>
        X
      </button>
      <ul className="sidebar-ul">
        {li.map((objLink, i) => (
          <li key={i}>
            <a href={objLink.link}>{objLink.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const BackDrop = () => <div className="backDrop" />;

const SideDrawBtn = ({ click }) => (
  <button className="toggle-Btn" onClick={click}>
    <div className="btn-line"></div>
    <div className="btn-line"></div>
    <div className="btn-line"></div>
  </button>
);

const Nav = () => {
  const [sideDrawOpen, setSideDrawOpen] = useState(false);

  const drawToggleHandler = () => {
    setSideDrawOpen(prevSideDrawOpen => !prevSideDrawOpen);
  };

  const backDropClickHandler = () => {
    setSideDrawOpen(false);
  };

  let backDrop = null;
  if (sideDrawOpen) {
    backDrop = <BackDrop />;
  }



  return (
    <div style={{ height: '100%' }}>
      <header className="toolbar">
        <nav className="toolbar-nav">
          <div>
            <SideDrawBtn click={drawToggleHandler} />
          </div>
          <div className="logo">
            <a href="/">POSTPULSE</a>
          </div>
          <div className="spacer"></div>

          <div>
            <ul>
              <li>
                <Stack direction="row" spacing={2}>
                  <Link to="/signup">
                    <Button variant="contained">
                      Sign Up
                    </Button>
                  </Link>
                </Stack>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <SideDraw click={backDropClickHandler} show={sideDrawOpen} />
      {backDrop}
      <main>
        {/* <Home /> */}
      </main>
    </div>
  );
};

export default Nav