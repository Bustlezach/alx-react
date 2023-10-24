import { getFullYear } from './utils';
import { getFooterCopy } from './utils';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div>
      <header className='App-header'>
        <img src={logo} alt='logo'/>
        <h1>School dashboard</h1>
      </header>
      <main role='main' className='App-body'>
        <p id='tags'>Login to access the full dashboard</p>
        <label htmlFor='email' id='tags'>Email: </label>
        <input name='email' type='email'/>
        <label htmlFor='password' id='tags'>Password: </label>
        <input name='password' type='password'/>
        <button type='button'>Ok</button>
      </main>
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
