import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<Landing/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
