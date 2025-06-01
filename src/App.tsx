import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import RoleSelect from './pages/RoleSelect';
import VoluntarioPage from './pages/VoluntarioPage';
import BeneficiarioPage from './pages/BeneficiarioPage';

const token = localStorage.getItem('token');

function App() {
  return (
    <BrowserRouter>
      {token && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/role-select" element={<RoleSelect />} />
        <Route path="/voluntario" element={<VoluntarioPage />} />
        <Route path="/beneficiario" element={<BeneficiarioPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/dashboard"
          element={token ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
