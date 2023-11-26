import {
   LOGIN, 
   LOGOUT, 
   DISPLAY_NOTIFICATION_DRAWER, 
   HIDE_NOTIFICATION_DRAWER 
} from './uiActionTypes';

export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    },
  };
}

export function logout() {
  return {type: LOGOUT};
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer () {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

export function boundLogout() {
  return (dispatch(logout()));
}

export function boundLogout(email, password) {
  return (dispatch(login(email, password)));
}

export function boundDisplayNotificationDrawe() {
  return dispatch(displayNotificationDrawer());
}

export function boundHideNotificationDrawer() {
  return (dispatch(hideNotificationDrawer()));
}