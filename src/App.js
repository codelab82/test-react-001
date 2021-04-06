import logo from './logo.svg';
import './App.css';
import Otp from './Otp';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Otp />
        <br/>
        <input type="file" multiple accept="image/*" />
        <br/>
        <br/>
        <input accept="image/*" id="icon-button-file" type="file" capture="environment"/>
      </header>
    </div>
  );
}

export default App;
