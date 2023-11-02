import logo from '../assets/holberton-Logo.jpg';
import './Header.css';


function Header() {
  return(
  <div>
    <header className='App-header'>
        <img src={logo} alt='logo'/>
        <h1>School dashboard</h1>
    </header>
  </div>
  );
}

export default Header;