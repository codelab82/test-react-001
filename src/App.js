import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Otp from './Otp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.number);
    this.setState({ number: '', submitted:true });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h5>
            Send OTP message
        </h5>
        {
          this.state.submitted ? <Otp/> :
          <form onSubmit={this.handleSubmit}>
            <label>Inserisci il tuo numero di cellulare:</label><br />
            <input type="text" className="input-number" value={this.state.number} onChange={(e) => this.setState({ number: e.target.value })} />
            <button className="otp-btn" type="submit">INVIAMI OTP</button><br /><br />
          </form>
        }
        </header>
      </div>
    );
  }
}

export default App;
