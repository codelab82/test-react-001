import logo from './logo.svg';
//import './App.css';
import Otp from './Otp';
import PictureTaker from './components/PictureTaker/PictureTaker';
import DataTableComponent from './components/DataTableComponent/DataTableComponent';
import DataTableComponentV3 from './components/DataTableComponentV3/DataTableComponentV3';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> 
        <Otp />
        <br/>
        <input type="file" multiple accept="image/*" />
        <br/>
        <br/>
        <PictureTaker /> */}
      </header>
      <DataTableComponent/>
    </div>
  );
}

export default App;
