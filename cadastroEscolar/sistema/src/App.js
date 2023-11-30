import logo from './logo.svg';
import './App.css';
// import Clientes from './components/cadastros/Cliente.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from './components/utils/Menu.jsx';

function App() {
  return (
    <div className="App">
      {/* <Clientes />       */}
      <Router>
        <Menu />
      </Router>
    </div>
  );
}

export default App;
