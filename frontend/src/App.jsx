import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Home2 from './Pages/Home2';
import Admin from './Pages/Admin';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
        
        {/* Admin Portal Routes */}
        <Route path="/admin" element={<Admin view="login" />} />
        <Route path="/admin/portal/login" element={<Admin view="login" />} />
        <Route path="/admin/portal/dashboard" element={<Admin view="dashboard" />} />
        <Route path="/admin/portal/*" element={<Navigate to="/admin/portal/login" replace />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
