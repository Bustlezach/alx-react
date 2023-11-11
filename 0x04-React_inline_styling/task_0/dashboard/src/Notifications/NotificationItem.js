import React, {Component} from "react";
import PropTypes from 'prop-types';


class NotificationItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {type, html, value, markAsRead, id} = this.props;
    let li;
  value? 
  li = <li data-notification-type={type} 
  onClick={() => markAsRead(id)}>{ value }</li> : 
  li = <li data-notification-type={type} 
  dangerouslySetInnerHTML={html}
  onClick={() => markAsRead(id)}></li>;
  return li;
  }
}


NotificationItem.defaultProps = {
  type:'default',
  value: '',
  html: {},
  id: NaN,
  markAsRead: () => {},
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

export default NotificationItem;