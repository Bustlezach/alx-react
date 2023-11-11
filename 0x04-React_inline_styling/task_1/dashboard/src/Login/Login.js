import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create(
  {
    tags: {
      fontWeight: 'bold',
    },
    
    bodyInput: {
      marginRight: '1rem',
    },
    
    bodyButton: {
      cursor: 'pointer',
    }
  }
);

function Login() {
  return(
    <div>
      <main role='main' className='body'>
        <p className={css(styles.tags)}>Login to access the full dashboard</p>
        <label htmlFor='email' className={css(styles.tags)}>Email: </label>
        <input className={css(styles.bodyInput)} name='email' type='email'/>
        <label htmlFor='password' className={css(styles.tags)}>Password: </label>
        <input className={css(styles.bodyInput)} name='password' type='password'/>
        <button className={css(styles.bodyButton)} type='button'>Ok</button>
      </main>
    </div>
  );
}

export default Login;