import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { DailyAttendance } from './features/attendance/DailyAttendance';

// Componentes de prueba (Dummy) para las vistas que aún no hemos programado
const Dashboard = () => <h1 className="text-3xl font-bold text-gray-800">Panel Principal (KPIs)</h1>;
const Vehiculos = () => <h1 className="text-3xl font-bold text-gray-800">Gestión de Camionetas y Flota</h1>;
const Trabajadores = () => <h1 className="text-3xl font-bold text-gray-800">Gestión de Personal</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Padre: Usa nuestro molde (Layout) que contiene el Sidebar */}
        <Route path="/" element={<Layout />}>
          
          {/* Rutas Hijas */}
          <Route index element={<Dashboard />} />
          
          {/* Aquí integramos el nuevo módulo operativo real */}
          <Route path="asistencia" element={<DailyAttendance />} />
          
          <Route path="vehiculos" element={<Vehiculos />} />
          <Route path="trabajadores" element={<Trabajadores />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;