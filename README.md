# Sistema-Integral-de-Control-Operativo-y-Asistencia




Plataforma web diseñada para la gestión de personal, control de asistencia y administración de flota vehicular (camionetas) en operaciones de campo, ideal para el sector de ingeniería y servicios energéticos.

## 🚀 Tecnologías (Frontend)
* **Framework:** React 18+
* **Lenguaje:** TypeScript
* **Herramienta de Construcción:** Vite
* **Estilos:** Tailwind CSS v4
* **Enrutamiento:** React Router DOM

## 📁 Estructura del Proyecto
El proyecto sigue una arquitectura orientada a características (Feature-driven):

## Procedimiento de Inicializacion

### 1. Creación del Proyecto Base
Es importante tener o estar en una carpeta limpia (fuera de cualquier otro proyecto) y de tener Node.js en su versión más reciente (LTS). 
```
npm create vite@latest frontend -- --template react-ts

cd frontend-operativo

npm install
```

### 2. Instalación de dependencias claves
Instalaremos el enrutador y la versión moderna de Tailwind (v4), que ya no requiere archivos de configuración extra.

```
npm install react-router-dom

npm install tailwindcss @tailwindcss/vite
```

### 3. Configuración de Tailwind CSS v4
Abrir el archivo vite.config.ts y modificarlo para que quede asi (similar):

```typescript
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
})

```

### 4. Limpieza y configuración de estilos
1. Ir la carpeta src/.

2. Eliminar el archivo App.css (no lo usaremos).

3. Abrir el archivo src/index.css, y borrar todo su contenido y escribir únicamente esta línea:

```css
@import "tailwindcss";
```
### 5. Limpieza del Componente Principal
Borramos todo lo que hay en src/App.tsx y lo cambiamos por este código para comprobar que todo este funcionando:

```typescript
function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-800">
        Sistema de Control Operativo - Entorno Listo
      </h1>
    </div>
  )
}

export default App
```

Ejecutamos `npm run dev` y verificamos.