// src/features/attendance/DailyAttendance.tsx
import { useState } from 'react';
import type { DailyRecord } from '../../types';
import { mockWorkers, mockVehicles, mockActivities } from './mockData';

export const DailyAttendance = () => {
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [records, setRecords] = useState<DailyRecord[]>([]);

  // Función para agregar una fila vacía a la tabla
  const handleAddRecord = () => {
    const newRecord: DailyRecord = {
      id: crypto.randomUUID(), // Genera un ID temporal único
      date: selectedDate,
      fullName: '',
      activityId: '',
      status: 'ASISTIÓ',
      viaticAmount: 0,
    };
    setRecords([...records, newRecord]);
  };

  // Función para actualizar un campo específico de una fila
  const handleUpdateRecord = (id: string, field: keyof DailyRecord, value: string | number) => {
    setRecords(records.map(record => 
      record.id === id ? { ...record, [field]: value } : record
    ));
  };

  // Función para eliminar una fila
  const handleRemoveRecord = (id: string) => {
    setRecords(records.filter(record => record.id !== id));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Cabecera del Módulo */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Registro Diario de Operaciones</h2>
          <p className="text-gray-500 text-sm mt-1">Asigne personal, frentes de trabajo y unidades.</p>
        </div>
        <div className="flex items-center space-x-3">
          <label className="font-medium text-gray-700">Fecha:</label>
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Tabla Dinámica */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-700 text-sm uppercase">
              <th className="p-3 border-b">Personal</th>
              <th className="p-3 border-b">Actividad / Proyecto</th>
              <th className="p-3 border-b">Unidad (Opcional)</th>
              <th className="p-3 border-b">Estado</th>
              <th className="p-3 border-b w-24">Viático</th>
              <th className="p-3 border-b text-center w-16">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-gray-50 border-b border-gray-100 transition-colors">
                <td className="p-2">
                  <select 
                    value={record.fullName}
                    onChange={(e) => handleUpdateRecord(record.id, 'fullName', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-blue-500"
                  >
                    <option value="">Seleccione personal...</option>
                    {mockWorkers.map(w => <option key={w.id} value={w.fullName}>{w.fullName}</option>)}
                  </select>
                </td>
                <td className="p-2">
                  <select 
                    value={record.activityId}
                    onChange={(e) => handleUpdateRecord(record.id, 'activityId', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-blue-500"
                  >
                    <option value="">Seleccione frente...</option>
                    {mockActivities.map(a => <option key={a.id} value={a.id}>{a.code ? `(${a.code}) ` : ''}{a.description_rep}</option>)}
                  </select>
                </td>
                <td className="p-2">
                  <select 
                    value={record.vehiclePlate || ''}
                    onChange={(e) => handleUpdateRecord(record.id, 'vehiclePlate', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-blue-500"
                  >
                    <option value="">Ninguna</option>
                    {mockVehicles.map(v => <option key={v.id} value={v.plate}>{v.plate}</option>)}
                  </select>
                </td>
                <td className="p-2">
                  <select 
                    value={record.status}
                    onChange={(e) => handleUpdateRecord(record.id, 'status', e.target.value)}
                    className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-blue-500"
                  >
                    <option value="ASISTIÓ">Asistió</option>
                    <option value="COMPENSA">Compensa</option>
                    <option value="DESCANSO_MEDICO">Descanso Médico</option>
                    <option value="FALTA">Falta</option>
                  </select>
                </td>
                <td className="p-2">
                  <input 
                    type="number" 
                    value={record.viaticAmount === 0 ? '' : record.viaticAmount}
                    onChange={(e) => handleUpdateRecord(record.id, 'viaticAmount', Number(e.target.value))}
                    className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-blue-500"
                    min="0"
                  />
                </td>
                <td className="p-2 text-center">
                  <button 
                    onClick={() => handleRemoveRecord(record.id)}
                    className="text-red-500 hover:text-red-700 font-bold px-2 py-1 rounded"
                    title="Eliminar fila"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
            
            {/* Estado vacío */}
            {records.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-gray-500 italic">
                  No hay registros para este día. Presione "Agregar Personal" para comenzar.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Botones de Acción Globales */}
      <div className="mt-6 flex justify-between">
        <button 
          onClick={handleAddRecord}
          className="bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 font-semibold py-2 px-4 rounded-md transition-colors"
        >
          + Agregar Personal
        </button>

        <button 
          onClick={() => console.log('Datos listos para enviar al backend (Spring Boot):', records)}
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-md shadow-sm transition-colors"
          disabled={records.length === 0}
        >
          Guardar Registro del Día
        </button>
      </div>
    </div>
  );
};