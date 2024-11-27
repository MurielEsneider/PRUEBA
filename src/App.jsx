import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HOME from './home/home';
import Landing from './LADING/landing';

function App() {
  return (
    <Router> 
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
