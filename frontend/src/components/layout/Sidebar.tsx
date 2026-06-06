import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded-md transition-colors font-medium ${
      isActive 
        ? 'bg-blue-700 text-white' 
        : 'text-gray-300 hover:bg-blue-800 hover:text-white'
    }`;

  return (
    <aside className="w-64 bg-blue-900 h-screen text-white flex flex-col shadow-xl">
      <div className="p-6 text-2xl font-bold border-b border-blue-800 text-center">
        Voltan <span className="text-blue-400">Control</span>
      </div>
      
      <nav className="flex-1 p-4 space-y-3 mt-4">
        <NavLink to="/" className={linkClasses}>Dashboard</NavLink>
        <NavLink to="/asistencia" className={linkClasses}>Asistencia</NavLink>
        <NavLink to="/vehiculos" className={linkClasses}>Flota Vehicular</NavLink>
        <NavLink to="/trabajadores" className={linkClasses}>Personal</NavLink>
      </nav>
    </aside>
  );
};