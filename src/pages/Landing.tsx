import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="flex h-screen w-screen">
      {/* Lado da imagem */}
      <div className="w-[60%] h-full hidden md:block relative">
        <img
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fit=crop&w=1600&q=80"
          alt="Pessoas ajudando"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Lado do conteúdo */}
      <div className="w-full md:w-[40%] h-full bg-white flex flex-col justify-center items-center px-8">
        {/* Logo */}
        <img src="src\assets\logo_vollink.png" alt="Logo Vollink" className="w-32 mb-6" />

        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">
          Bem-vindo ao Vollink!
        </h1>
        <p className="text-center text-gray-600 mb-8 max-w-xs">
          Conectamos voluntários a pessoas que precisam de serviços gratuitos,
          como cortes de cabelo, manutenção de aparelhos e muito mais!
        </p>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white text-center py-3 rounded"
          >
            Entrar
          </Link>
          <Link
            to="/register"
            className="bg-green-500 hover:bg-green-600 text-white text-center py-3 rounded"
          >
            Cadastrar
          </Link>
        </div>
      </div>
    </div>
  );
}