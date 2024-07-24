import React from 'react';
import "./Nav.scss";

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar__list">
        <li className="nav-bar__item">
          <a href="#about-me">Me</a>
        </li>
        <li className="nav-bar__item">
          <a href="#where">Organisations</a>
        </li>
        <li className="nav-bar__item">
          <a href="#what">Expereince</a>
        </li>
        <li className="nav-bar__item">
          <a href="#who">People</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

// import React from 'react';
// import './Nav.scss';

// const NavBar: React.FC = () => {
//     return (
//         <nav className="nav-bar">
//             <ul className="nav-bar__list">
//                 <li className="nav-bar__item">Me</li>
//                 <li className="nav-bar__item">Where</li>
//                 <li className="nav-bar__item">What</li>
//             </ul>
//         </nav>
//     );
// };

// export default NavBar;