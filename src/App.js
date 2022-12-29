import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import About from './pages/About';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<Landing/>}/>
          <Route path='/about' element={<About/>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
