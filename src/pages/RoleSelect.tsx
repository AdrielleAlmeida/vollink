import { useNavigate } from 'react-router-dom';

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-100">
      {/* Cabeçalho */}
      <div className="bg-purple-700 text-white p-6 text-center text-2xl font-bold">
        Escolha seu Papel na Plataforma
      </div>

      {/* Conteúdo Central */}
      <div className="flex flex-col md:flex-row justify-center items-center flex-1 gap-8 p-8">
        {/* Voluntário */}
        <div
          onClick={() => navigate('/voluntario')}
          className="cursor-pointer bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold w-full max-w-md p-8 rounded-lg shadow-md text-center transition-all"
        >
          <h2 className="text-2xl mb-4">Sou Voluntário</h2>
          <p>Desejo oferecer um serviço em uma data específica.</p>
        </div>

        {/* Beneficiário */}
        <div
          onClick={() => navigate('/beneficiario')}
          className="cursor-pointer bg-green-100 hover:bg-green-200 text-green-800 font-semibold w-full max-w-md p-8 rounded-lg shadow-md text-center transition-all"
        >
          <h2 className="text-2xl mb-4">Sou Beneficiário</h2>
          <p>Gostaria de encontrar serviços voluntários disponíveis.</p>
        </div>
      </div>
    </div>
  );
}
