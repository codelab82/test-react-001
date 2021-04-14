import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header/Header';
import Otp from './Otp';
import PictureTaker from './components/PictureTaker/PictureTaker';
import DataTableComponent from './components/DataTableComponent/DataTableComponent';
import DataTableComponentV3 from './components/DataTableComponentV3/DataTableComponentV3';
import DatiRichiedente from './components/DatiRichiedente/DatiRichiedente';
import AsideDx from './components/AsideDx/AsideDx';
import SelAnagrafica from './components/SelAnagrafica/SelAnagrafica';
import NavBar from './components/NavBar/NavBar';

const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <SelAnagrafica/>
      {/*<div className="container">
        <Header/>
        <div className="row justify-content-between">
            <div className="col-8" >
              <DatiRichiedente />
            </div>
            <div className="col-3 border">
              <AsideDx />
            </div>
        </div>
      </div>
      <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" /> 
        <Otp />
        <br/>
        <input type="file" multiple accept="image/*" />
        <br/>
        <br/>
        <PictureTaker /> 
      </header>
      <DataTableComponent/>*/}
    </div>
  );
}

export default App;
