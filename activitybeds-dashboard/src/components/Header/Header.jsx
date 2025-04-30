// src/components/Header.jsx (Updated)
import React from 'react';
import './Header.scss';
// import { FaPen, FaPlus } from 'react-icons/fa'; // Приклад іконок

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        {/* <FaPen className="title-icon" /> */}
        <span className="title-icon">📝</span> {/* Тимчасова іконка олівця */}
        <h1>Booking</h1>
      </div>
      <div className="header-actions"> {/* Змінив клас для ясності */}
        <button className="add-button">
           {/* <FaPlus /> */}
           + {/* Тимчасова іконка плюса */}
        </button>
      </div>
    </div>
  );
};

export default Header;