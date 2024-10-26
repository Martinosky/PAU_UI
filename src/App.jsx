import { useState } from 'react';
import Layout from './components/Layout';
import './App.css';

function App() {
  const [backgroundColorClass, setBackgroundColorClass] = useState('bg-white'); // Estado para el fondo

  return (
    <div className={`${backgroundColorClass} min-h-screen w-full`}> {/* Aplica la clase CSS al fondo */}
      <Layout backgroundColorClass={backgroundColorClass} setBackgroundColor={setBackgroundColorClass} /> {/* Pasa las funciones a Layout */}
    </div>
  );
}

export default App;
