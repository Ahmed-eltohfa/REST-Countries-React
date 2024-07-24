import './App.css';
import Nav from './components/Nav';
import CountryList from './components/CountryList';
import { Routes, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<CountryList />} />
        <Route path='/:countName' element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
