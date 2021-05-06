import './App.css';
import { Router } from '@reach/router';
import LogReg from './views/LogReg';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <LogReg path="/" default />
      </Router>
      
    </div>
  );
}

export default App;
