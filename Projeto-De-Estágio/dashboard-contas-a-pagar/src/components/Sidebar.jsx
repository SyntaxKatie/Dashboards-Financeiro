
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCreditCard, faFile } from '@fortawesome/free-solid-svg-icons';
import '@/styles/Sidebar.css';
import logo from '@/assets/logo.png';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo-container">
        <img src={logo} alt="Logo" className="sidebar-logo" />
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <a>
              <FontAwesomeIcon icon={faChartLine} className="icon" />
              <span>Dashboard</span>
            </a>
          </li>
          
          <li>
             <a>
              <FontAwesomeIcon icon={faCreditCard} className="icon" />
              <span>Contas a Pagar</span>
            </a>
          </li>
          
          <li>
             <a>
              <FontAwesomeIcon icon={faFile} className="icon" />
              <span>Relatórios</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;