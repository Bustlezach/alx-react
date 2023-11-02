import React from 'react';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';
import { getLatestNotification } from '../utils/utils';


function App({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];
  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ];
  let component = undefined;
  isLoggedIn ? 
    (component = <CourseList listCourses={listCourses}/>) : (component = <Login />);
  return (
    <div>
      <Notifications listNotifications={listNotifications}/>
      <Header />
      {component}
      <Footer />
    </div>
  );
}

App.defaultProps = {
  isLoggedIn: false,
};
App.PropsTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;
