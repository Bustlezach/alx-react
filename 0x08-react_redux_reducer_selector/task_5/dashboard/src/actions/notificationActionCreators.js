import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

export function markAsAread(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

export function boundMarkAsRead(index) {
  return dispatch(markAsAread(index));
}

export function boundSetNotificationFilter(filter) {
  return dispatch(setNotificationFilter(filter));
}

export function fetchNotificationsSuccess() {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
  }
}