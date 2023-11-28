import {
   LOGIN, 
   LOGOUT, 
   LOGIN_SUCCESS,
   LOGIN_FAILURE,
   DISPLAY_NOTIFICATION_DRAWER, 
   HIDE_NOTIFICATION_DRAWER 
} from './uiActionTypes';

import "node-fetch";

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

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
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

export function boundLogin(email, password) {
  return (dispatch(login(email, password)));
}

export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch("http://localhost:3000/login-success.json")
      .then((response) => {
        if(response.status === 200) {
          console.log("connected success")
        }
      })
      .then((response) => response.json())
      .then((data) => dispatch(loginSuccess()))
      .catch((err) => dispatch(loginFailure()))
  };
}

export function boundDisplayNotificationDrawe() {
  return dispatch(displayNotificationDrawer());
}

export function boundHideNotificationDrawer() {
  return (dispatch(hideNotificationDrawer()));
}