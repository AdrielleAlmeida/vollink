import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(username, password);
      localStorage.setItem('token', res.data.access_token);
      alert('Login realizado com sucesso!');
      navigate('/role-select');
    } catch {
      alert('Login inválido');
    }
  };

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

      {/* Formulário */}
      <div className="w-full md:w-[40%] h-full bg-white flex flex-col justify-center items-center px-8">
        <img src="src\assets\logo_vollink.png" alt="Logo Vollink" className="w-32 mb-6" />
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Faça seu Login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-xs"
        >
          <input
            className="border p-3 rounded"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="border p-3 rounded"
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded">
            Entrar
          </button>
          <p className="text-gray-500 text-center">
            Não tem uma conta?{' '}
            <a
              href="/register"
              className="text-blue-600 hover:underline font-semibold"
            >
              Cadastrar
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
