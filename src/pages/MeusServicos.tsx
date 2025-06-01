import { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  sub: number;
  username: string;
  iat: number;
  exp: number;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

export default function MeusServicosPage() {
  const [servicos, setServicos] = useState<Event[]>([]);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      const id = decoded.sub;

      axios
        .get(`http://127.0.0.1:3000/events/voluntario/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setServicos(res.data))
        .catch(() => setMensagem('Erro ao carregar serviços.'));
    } else {
      setMensagem('Usuário não autenticado.');
    }
  }, []);

  return (
    <div className="w-screen min-h-screen bg-blue-50">
      <div className="bg-blue-700 text-white text-center p-6 text-2xl font-semibold">
        Meus Serviços Voluntários
      </div>

      <div className="p-6 flex flex-col items-center">
        {mensagem && <p className="text-red-500 mb-4">{mensagem}</p>}

        {servicos.length === 0 && !mensagem && (
          <p className="text-gray-600">Nenhum serviço registrado ainda.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl mt-6">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="bg-white rounded shadow p-4 border border-blue-200"
            >
              <h3 className="text-lg font-semibold text-blue-700">{servico.title}</h3>
              <p className="text-gray-700 mt-1">{servico.description}</p>
              <p className="text-gray-500 text-sm mt-2">
                📅 {new Date(servico.date).toLocaleDateString()}
              </p>
              <p className="text-gray-500 text-sm">📍 {servico.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
