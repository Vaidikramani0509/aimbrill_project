import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomeScreen from './components/HomeScreen';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
