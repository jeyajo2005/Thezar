import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SiteContentProvider } from './context/SiteContentContext';
import Home from './Pages/Home';
import Admin from './Pages/Admin';

// Protected Route Guard for Admin Dashboard (/admin/portal/dashboard)
function ProtectedAdminRoute({ children }) {
  const token = localStorage.getItem('tzr_admin_token');
  if (!token) {
    return <Navigate to="/admin/portal/login" replace />;
  }
  return children;
}

// Public Admin Login Guard (/admin/portal/login)
function PublicAdminLoginRoute({ children }) {
  const token = localStorage.getItem('tzr_admin_token');
  if (token) {
    return <Navigate to="/admin/portal/dashboard" replace />;
  }
  return children;
}

export default function App() {
  return (
    <SiteContentProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        
          {/* Public Admin Login / Setup Route */}
          <Route
            path="/admin/portal/login"
            element={
              <PublicAdminLoginRoute>
                <Admin view="login" />
              </PublicAdminLoginRoute>
            }
          />

          {/* Protected Admin Dashboard Route (Access Denied without valid JWT) */}
          <Route
            path="/admin/portal/dashboard"
            element={
              <ProtectedAdminRoute>
                <Admin view="dashboard" />
              </ProtectedAdminRoute>
            }
          />

          {/* Any unauthenticated / unknown admin URL routes directly to Login */}
          <Route path="/admin/portal/*" element={<Navigate to="/admin/portal/login" replace />} />
          <Route path="/admin/*" element={<Navigate to="/admin/portal/login" replace />} />
          <Route path="/admin" element={<Navigate to="/admin/portal/login" replace />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </SiteContentProvider>
  );
}
