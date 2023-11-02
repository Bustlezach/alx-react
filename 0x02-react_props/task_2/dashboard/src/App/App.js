import React from 'react';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import './App.css';

function App() {
  return (
    <div>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
