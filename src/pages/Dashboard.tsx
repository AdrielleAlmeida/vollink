import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Bem-vindo ao Vollink</h1>
      <button onClick={logout} className="bg-red-500 text-white p-2 rounded">
        Sair
      </button>
    </div>
  );
}
