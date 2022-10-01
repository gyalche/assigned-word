import Chart from './pages/Task1/PieChart';
import Map from './pages/Task2/Map';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/task1' element={<Chart />} />
          <Route path='/task2' element={<Map />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
