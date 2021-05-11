import './App.css';
import { Router } from '@reach/router';
import LogReg from './views/LogReg';
import Header from './components/Header';
import Home from './components/Home';
import AddLights from './components/AddLights';
import AllLights from './components/AllLights';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <LogReg path="/" default />
        <Home path='/home' />
        <AddLights path='/addlights' />
        <AllLights path='/lights' />
      </Router>
      
    </div>
  );
}

export default App;
