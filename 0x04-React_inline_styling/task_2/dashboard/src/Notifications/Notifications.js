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
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.Notifications)} id="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
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
                position: 'absolute'
              }}
            >
                <img src={close_icon} alt="close" style={{ width: '8px', height: '8px' }}/>
            </button>
          </div>
        )};
      </Fragment>
    );
  }
}




Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

const styles = StyleSheet.create({
  Notifications: {
    border: '1px dashed rgb(228, 21, 90)',
    padding: '0 2rem 0 1rem',
    float: 'right',
    marginRight: '1rem',
  },
  
  menuItem: {
    textAlign: 'right',
    marginRight: '2rem',
  },

  notificationsButtonImage: {
    width: "10px",
  },
  
});

export default Notifications;