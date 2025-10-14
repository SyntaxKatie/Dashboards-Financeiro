// src/components/Sidebar.jsx
import React from 'react';
import logo from '@/assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCreditCard, faFile } from '@fortawesome/free-solid-svg-icons';
import '@/styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          <li>
            <FontAwesomeIcon icon={faChartLine} className="icon" />
            <span>Dashboard</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faCreditCard} className="icon" />
            <span>Contas a Pagar</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faFile} className="icon" />
            <span>Relatórios</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;