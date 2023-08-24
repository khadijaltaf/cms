import React, { useState } from 'react';
import './Nav.css'; 

const li = [
  {
    link: '/signup.jsx',
    text: 'DashBoard'
  },
  {
    link: '/',
    text: 'Link 2'

  },
  {
    link: '/',
    text: 'Link 3'
  },
  {
    link: '/',
    text: 'Link 4'
  },
  {
    link: '/',
    text: 'Link 5'
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
            <a href="/">The Logo</a>
          </div>
          <div className="spacer"></div>
          <div>
            <ul>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Users</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <SideDraw click={backDropClickHandler} show={sideDrawOpen} />
      {backDrop}
      <main>
        <h2>This is the main area</h2>
      </main>
    </div>
  );
};

export default Nav