import React from "react";
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from "../utils/utils";
import NotificationItem from "./NotificationItem";

const handleClick = () => {
  console.log(`Close button has been clicked`);
};


const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type={'default'} value={'New course available'} />
        <NotificationItem type={'urgent'} value={'New resume available'} />
        <NotificationItem html={{ __html: `${getLatestNotification()}` }} />
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
          <img src={close_icon} alt="close" style={{ width: '8px', height: '8px' }}/>
      </button>
    </div>
  );
};

export default Notifications;