import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../services/auth';

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    const fetchProfile = async () => {
      try {
        const res = await getProfile(token);
        setProfile(res);
      } catch {
        alert('Erro ao carregar perfil');
      }
    };
    fetchProfile();
  }, [token, navigate]);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Meu Perfil</h1>
      {profile ? (
        <div className="bg-white p-4 rounded shadow-md">
          <p><strong>Nome:</strong> {profile.username}</p>
          <p><strong>Email:</strong> {profile.email || 'Não informado'}</p>
          <p><strong>ID:</strong> {profile.id}</p>
        </div>
      ) : (
        <p>Carregando perfil...</p>
      )}
    </div>
  );
}
