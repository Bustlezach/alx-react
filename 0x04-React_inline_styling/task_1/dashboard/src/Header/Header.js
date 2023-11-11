import React from 'react';
import logo from '../assets/holberton-Logo.jpg';
import { StyleSheet, css } from 'aphrodite';


function Header() {
  return(
  <div>
    <header className={css(styles.header)}>
        <img src={logo} alt='logo' className={css(styles.headerImg)}/>
        <h1>School dashboard</h1>
    </header>
  </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: 'rgb(231, 80, 80)',
    borderBottom: 'thick solid rgb(231, 80, 80)',
    width: '100rem',
    fontSize: "12px"
  },
  
  headerImg: {
    width: '150px',
  }
});

export default Header;