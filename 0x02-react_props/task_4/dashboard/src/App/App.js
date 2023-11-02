import React from 'react';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';

function App({ isLoggedIn }) {
  let component = undefined;
  isLoggedIn ? (component = <CourseList />) : (component = <Login />);
  return (
    <div>
      <Notifications />
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
