import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './bootstrap.css';
import './App.css'
import { Router } from '@reach/router';
import LogReg from './views/LogReg';
import Header from './components/Header';
import Home from './components/Home';
import AddLights from './components/AddLights';
import AllLights from './components/AllLights';
import LightDetails from './components/LightDetails';
import Account from './components/Account';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <LogReg path="/" default />
        <Home path='/home' />
        <AddLights path='/addlights' />
        <AllLights path='/lights' />
        <LightDetails path='/lights/:light_id' />
        <Account path='/lights/account' />
        <Cart path='lights/cart' />
        <Checkout path='lights/cart/checkout' />
      </Router>
      
    </div>
  );
}

export default App;
