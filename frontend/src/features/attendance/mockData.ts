// src/features/attendance/mockData.ts
import type { Worker, Vehicle, Activity } from '../../types';

export const mockWorkers: Worker[] = [
  { id: 'W1', dni: '46412091', fullName: 'QUISPE CHULLUNQUIA ELIZABETH KARINA', category: 'ADMINISTRADORA', condition: 'ESTABLE' },
  { id: 'W2', dni: '29738909', fullName: 'VICENTE ESPINOZA HERNAN MELITON', category: 'ASIST. TECNICO', condition: 'ESTABLE' },
  { id: 'W3', dni: '29648678', fullName: 'CASILLA CONDORI TEOFILO', category: 'SUPERVISOR', condition: 'ESTABLE' },
  { id: 'W4', dni: '29587264', fullName: 'PUMA HELACONDO ROGER', category: 'OPERARIO', condition: 'ESTABLE' },
];

export const mockVehicles: Vehicle[] = [
  { id: 'V1', plate: 'CFU-948', status: 'DISPONIBLE' },
  { id: 'V2', plate: 'CFU-841', status: 'EN_CAMPO' },
  { id: 'V3', plate: 'CFV-715', status: 'DISPONIBLE' },
];

export const mockActivities: Activity[] = [
  { id: 'A1', description_rep: 'TRABAJOS EN OFICINA - ALMACEN', location: 'Arequipa' },
  { id: 'A2', description_rep: 'LIMPIEZA Y LUBRICACION', num_rep : 'REP1_130', location: 'Cusco' },
  { id: 'A3', description_rep: 'MANTENIMIENTO SUBESTACION POROMA', num_rep : 'REP1_140', location: 'Nazca' },
];