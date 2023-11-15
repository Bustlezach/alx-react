import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';





class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault;
    const { email, password } = this.state;

    if (email && password) {
      this.setState((prevState) => ({
        ...prevState, isLoggedIn: true
      }));
    }
  }

  handleChangeEmail(event) {
    const value = event.target.value;
    const { password } = this.state;
    if (value !== "" && password !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });
    this.setState((prevState) => ({
      ...prevState, email: value
    }));
  }

  handleChangePassword(event) {
    const value = event.target.value;
    const { password } = this.state;
    if (value !== "" && password !== "") this.setState({ enableSubmit: true });
    else this.setState({ enableSubmit: false });
    this.setState((prevState) => ({
      ...prevState, password: value
    }));
  }


  render() {
    return(
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit} action=''>
          <label htmlFor='email'>Email: </label>
          <input
           className={css(styles.loginInput)} 
           name='email'
           onChange={this.handleChangeEmail} 
           value={this.state.email}
           type='email'
           required/>
          <label htmlFor='password'>Password: </label>
          <input
           className={css(styles.loginInput)}
           name='password' 
           onChange={this.handleChangePassword}
           value={this.state.password}
           type='password'
           required/>
          <input className={css(styles.bodyButton)} type='submit' disabled={!this.state.enableSubmit} value='Login'/>
        </form>
      </div>
    );
  }
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