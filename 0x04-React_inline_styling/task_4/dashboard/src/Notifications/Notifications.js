import React, { Fragment, Component } from "react";
import close_icon from '../assets/close-icon.png';
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from "aphrodite";


class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    const handleClick = () => {
      console.log(`Close button has been clicked`);
    };
    const { displayDrawer, listNotifications } = this.props;
    return (
      <Fragment>
        <div className={css(styles.menuItem)} id="menuItem">
          <p >
            Your notifications
          </p>
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)} id="Notifications">
            <p className={css(styles.notificationsP)}>
              Here is the list of notifications
            </p>
            <ul className={css(styles.notificationsUL)}>
              {listNotifications.length === 0 && (
                <NotificationItem value='No new notification for now' />
              )}
              {listNotifications.map((notification) => (
                <NotificationItem
                  markAsRead={this.markAsRead}
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  id={notification.id}
                />
              ))}
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
                position: 'absolute',
              }}
            >
                <img 
                  src={close_icon} alt="close" 
                  className={css(styles.notificationsButtonImage)}
                />
            </button>
          </div>
        )};
      </Fragment>
    );
  }
}




Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

const screenSize = {
  small: '@media all and (max-width: 900px)',
};


const cssVars = {
  mainColor: "#e01d3f",
};


const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateYKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "75%": {
    transform: "translateY(5px)",
  },

  "100%": {
    transform: "translateY(0)",
  },
};

const borderKeyframes = {
  "0%": {
    border: `3px dashed deepSkyBlue`,
  },

  "100%": {
    border: `3px dashed ${cssVars.mainColor}`,
  },
};



const styles = StyleSheet.create({
  Notifications: {
    border: '1px dashed rgb(228, 21, 90)',
    padding: '0 2rem 0 1rem',
    float: 'right',
    marginRight: '1rem',
    animationName: [borderKeyframes],
    animationDuration: "0.8s",
    animationIterationCount: 1,
    animationFillMode: "forwards",
    ":hover": {
      border: `3px dashed deepSkyBlue`,
    },
    [screenSize.small]: {
      background: 'white',
      width: '100vw',
      height: '100vh',
      fontSize: '1.5rem',
      float: "none",
      position: "absolute",
      ":hover": {
        border: "none",
        // animationFillMode: "forwards",
      },
      listStyle: "none",
      padding: 0,
    },
  },

  menuItemPNoShow: {
    marginRight: "0.5rem",
    [screenSize.small]: {
      display: "none",
    },
  },

  notificationsP: {
    margin: 0,
    marginTop: "1.5rem",
  },

  notificationsUL: {
    [screenSize.small]: {
      padding: 0,
      listStyle: 'none',
    },
  },
  
  menuItem: {
    float: "right",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [opacityKeyframes, translateYKeyframes],
      animationDuration: "1s, 0.5s",
      animationIterationCount: 3,
    },
  },

  notificationsButtonImage: {
    width: "0.6rem",
  },
  
});

export default Notifications;