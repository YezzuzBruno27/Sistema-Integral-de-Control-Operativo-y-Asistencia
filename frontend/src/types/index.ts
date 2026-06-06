// src/types/index.ts

// 1. Catálogo de Personal
export interface Worker {
  id: string;
  dni: string;
  fullName: string; 
  category: 'ADMINISTRADORA' | 'ASIST. TECNICO' | 'ALMACEN' | 'ING. SEGURIDAD' | 'SUPERVISOR' | 'OPERARIO' | 'AYUDANTE';
  condition: 'ESTABLE' | 'EVENTUAL';
}

// 2. Catálogo de Unidades (Camionetas)
export interface Vehicle {
  id: string;
  plate: string; // Ej: "CFU-841", "CFV-715"
  status: 'DISPONIBLE' | 'EN_CAMPO' | 'MANTENIMIENTO';
}

// 3. Catálogo de Actividades / Proyectos (Lo que en el Excel son las filas agrupadoras)
export interface Activity {
  id: string;
  code?: string; // Ej: "R0124195" (Opcional, para trabajos de oficina no aplica)
  num_rep?: string; // Ej: "REP1-119" (Opcional, para trabajos de oficina no aplica)
  description_rep: string; // Ej:"L1021 Inspección ligera" o "TRABAJOS EN OFICINA"
  location: string; // Ej: "Arequipa", "Nazca", "Cusco"
}

// 4. El Registro Diario de Asistencia (La fila individual de cada día)
export interface DailyRecord {
  id: string;
  date: string; // Formato YYYY-MM-DD
  fullName: string;
  activityId: string; // ¿En qué proyecto o frente de trabajo estuvo?
  vehiclePlate?: string; // ¿Qué camioneta usó? (Opcional)
  status: 'ASISTIÓ' | 'COMPENSA' | 'DESCANSO_MEDICO' | 'FALTA';
  viaticAmount: number; // Monto de viático/hospedaje
}