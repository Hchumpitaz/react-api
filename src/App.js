import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponante } from './components/SegundoComponante';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esto es un parrafo de React con Harrison</p>
        <PrimerComponente/>
        <SegundoComponante/>
        <PrimerComponente/>
      </header>
    </div>
  );
}

export default App;
