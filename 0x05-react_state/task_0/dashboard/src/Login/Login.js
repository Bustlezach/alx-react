import React from 'react';
import { StyleSheet, css } from 'aphrodite';



function Login() {
  return(
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email'>Email: </label>
      <input className={css(styles.loginInput)} name='email' type='email'/>
      <label htmlFor='password'>Password: </label>
      <input className={css(styles.loginInput)} name='password' type='password'/>
      <button className={css(styles.bodyButton)} type='button'>Ok</button>
    </div>
  );
}

const screenSize = {
  small: '@media all and (max-width: 900px)',
};

const styles = StyleSheet.create(
  {
    login: {
      fontSize: '1.2rem',
      marginTop: '2rem',
      flexGrow: '1',
      [screenSize.small]: {
        fontSize: '1rem',
        margin: '1rem  0.5rem 0 0',
      },
    },
    loginInput: {
      marginRight: '1rem',
      [screenSize.small]: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0.5rem 0',
      },
    },
    
    bodyButton: {
      cursor: 'pointer',
    }
  }
);

export default Login;