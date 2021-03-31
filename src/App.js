import logo from './logo.svg';
import './App.css';
import Otp from './Otp';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Otp />
      </header>
    </div>
  );
}

export default App;
