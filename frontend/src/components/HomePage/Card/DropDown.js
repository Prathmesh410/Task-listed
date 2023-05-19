import React, { useState } from "react";
import {RiArrowDropDownLine} from "react-icons/ri"
import "./Card.css";

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={toggleDropdown}>
          Dropdown <RiArrowDropDownLine className="dropdown-icon" />
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <p>Dropdown menu item 1</p>
            <p>Dropdown menu item 2</p>
            <p>Dropdown menu item 3</p>
            <p>Dropdown menu item 3</p>
          </div>
        )}
      </div>
    );
  };
  

export default Dropdown;