import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home2" element={<Home2 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
