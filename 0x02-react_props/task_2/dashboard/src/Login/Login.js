import React from 'react';
import './Login.css';

function Login() {
  return(
    <div>
      <main role='main' className='body'>
        <p class='tags'>Login to access the full dashboard</p>
        <label htmlFor='email' id='tags'>Email: </label>
        <input name='email' type='email'/>
        <label htmlFor='password' id='tags'>Password: </label>
        <input name='password' type='password'/>
        <button type='button'>Ok</button>
      </main>
    </div>
  );
}

export default Login;