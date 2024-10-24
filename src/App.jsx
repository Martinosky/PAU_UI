import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Verifica si el color rojo se aplica correctamente */}
      <div className="text-red-700 text-xl p-4">Hola, Tailwind está funcionando</div>
      
      {/* Verifica si el estilo del texto es aplicado */}
      <h1 className="text-3xl font-bold underline text-blue-600 mb-4">
        ¡Hello world!
      </h1>

      {/* Botón con estilo Tailwind para cambiar el contador */}
      <button 
        className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        onClick={() => setCount(count + 1)}
      >
        Contador: {count}
      </button>
    </>
  );
}

export default App;
