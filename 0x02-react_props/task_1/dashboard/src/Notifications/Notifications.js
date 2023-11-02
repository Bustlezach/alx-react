import React from "react";
import './Notifications.css';
import close_icon from './close-icon.png';
import { getLatestNotification } from "../utils/utils";

const handleClick = () => {
  console.log(`Close button has been clicked`);
};


const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default' style={{color: 'blue'}}>New course available</li>
        <li data-priority='urgent' style={{color: 'red'}}>New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }}
          data-priority='urgent' style={{color: 'red'}}
        ></li>
      </ul>
      <button type="button"
        aria-label="close"
        onClick={handleClick}
        style={{
          cursor: 'pointer',
          display: 'inline',
          background: 0,
          top: '1rem',
          right: '1rem',
          border: 'none',
          position: 'absolute'
        }}
      >
          <img src={close_icon} alt="close"/>
      </button>
    </div>
  );
};

export default Notifications;