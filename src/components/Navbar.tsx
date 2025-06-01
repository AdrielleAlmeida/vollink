import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-blue-500 p-4 text-white">
      <div className="font-bold">Vollink</div>
      <div className="flex gap-4">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Perfil</Link>
      </div>
    </nav>
  );
}
