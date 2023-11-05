import React from "react";
import PropTypes from 'prop-types';


function NotificationItem({type, html, value, markAsRead, id}) {
  let li;
  value? 
  li = <li data-notification-type={type} onClick={() => markAsRead(id)}>{ value }</li> : 
  li = <li data-notification-type={type} dangerouslySetInnerHTML={html}></li>;
  return li;
}

NotificationItem.defaultProps = {
  type:'default',
  value: '',
  html: {},
  id: NaN,
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number,
};

export default NotificationItem;