import logo from './logo.svg';
import './App.css';
import NavbarComp from './Component/NavbarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards/Cards';

function App() {
  return (
    <div className="App">
    
      <NavbarComp/>
      <Cards/>
      </div>
  );
}

export default App;
