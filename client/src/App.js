import './App.css';
import { Router } from '@reach/router';
import LogReg from './views/LogReg';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <LogReg path="/" default />
        <Home path='/home' />
      </Router>
      
    </div>
  );
}

export default App;
