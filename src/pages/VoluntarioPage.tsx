import { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

interface JwtPayload {
  sub: number;
  username: string;
  iat: number;
  exp: number;
}

export default function VoluntarioPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [volunteerId, setVolunteerId] = useState<number | null>(null);
  const [sucesso, setSucesso] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      setVolunteerId(decoded.sub);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');

      if (!token || !volunteerId) {
        setMensagem('Usuário não autenticado.');
        return;
      }

      await axios.post(
        'http://127.0.0.1:3000/events',
        {
          title,
          description: descricao,
          date: data,
          location: localizacao,
          volunteerId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMensagem('Serviço registrado com sucesso!');
      setSucesso(true);
      setTitle('');
      setDescricao('');
      setData('');
      setLocalizacao('');
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao registrar serviço.');
    }
  };

  return (
    <div className="w-screen min-h-screen bg-blue-50">
      <div className="bg-blue-600 text-white text-center p-6 text-2xl font-semibold">
        Voluntário
      </div>

      <div className="flex flex-col items-center justify-center p-6">
        <h2 className="text-xl font-semibold mb-4 text-blue-700">Cadastrar Serviço Voluntário</h2>

        {!sucesso ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              placeholder="Título do serviço"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-3 rounded"
              required
            />
            <input
              type="text"
              placeholder="Descrição"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="border p-3 rounded"
              required
            />
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
              className="border p-3 rounded"
              required
            />
            <input
              type="text"
              placeholder="Localização"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
              className="border p-3 rounded"
              required
            />
            <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 rounded">
              Registrar Serviço
            </button>
          </form>
        ) : (
          <div className="text-center flex flex-col items-center gap-4">
            <p className="text-green-600 font-semibold">{mensagem}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={() => setSucesso(false)}
            >
              Cadastrar outro serviço
            </button>
            <button
              className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800"
              onClick={() => navigate('/meus-servicos')}
            >
              Ver meus serviços
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
