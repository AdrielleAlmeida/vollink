import { useEffect, useState } from 'react';
import axios from 'axios';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
}

export default function BeneficiarioPage() {
  const [servicos, setServicos] = useState<Event[]>([]);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:3000/events');
        setServicos(res.data);
      } catch (error) {
        console.error(error);
        setMensagem('Erro ao buscar serviços.');
      }
    };

    fetchServicos();
  }, []);

  return (
    <div className="w-screen min-h-screen bg-green-50">
      <div className="bg-green-600 text-white text-center p-6 text-2xl font-semibold">
        Beneficiário
      </div>

      <div className="p-6 flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4 text-green-700">Serviços Disponíveis</h2>

        {mensagem && <p className="text-red-600 mb-4">{mensagem}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {servicos.map((servico) => (
            <div
              key={servico.id}
              className="border rounded-lg shadow p-4 bg-white"
            >
              <h3 className="text-xl font-bold text-green-700">{servico.title}</h3>
              <p className="text-gray-700">{servico.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                📅 {new Date(servico.date).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">📍 {servico.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
