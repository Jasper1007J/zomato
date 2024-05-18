import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';

function App() {

  <Routes>
  <Route path="/" element={<Home/>} />
</Routes>
  return (
   
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
