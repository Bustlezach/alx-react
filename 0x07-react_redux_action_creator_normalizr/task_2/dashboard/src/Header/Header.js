import React, { Component } from 'react';
import logo from '../assets/holberton_Logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';


class Header extends Component {
  constructor(props) {
    super(props);

  }
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return(
      <div className={css(styles.header)}>
          <img src={logo} alt='logo' className={css(styles.headerImg)}/>
          <h1>School dashboard</h1>
          {user.isLoggedIn && (
                <p id='logoutSection' className={css(styles.logoutSection)}>
                  Welcome <b>{`${user.email}`}</b> 
                  <span onClick={logOut} className={css(styles.logoutSectionSpan)}>(logout)</span></p>
              )}
      </div>
     );
  }
}



const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgb(231, 80, 80)',
    // borderBottom: 'thick solid rgb(231, 80, 80)',
    width: '100rem',
    fontSize: "1.3rem"
  },
  
  headerImg: {
    width: '15rem',
  },
  
  logoutSection: {
    color: "black",
    position: "absolute",
    right: 0,
    paddingRight: "20px",
    alignSelf: "flex-end",
  },

  logoutSectionSpan: {
    fontStyle: "italic",
    cursor: "pointer",
  },
});

export default Header;