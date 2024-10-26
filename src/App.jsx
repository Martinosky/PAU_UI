import { useState } from 'react';
import Layout from './components/Layout';
import './App.css';

function App() {
  const [backgroundColorClass, setBackgroundColorClass] = useState('bg-white');

  return (
    <div className={`${backgroundColorClass} min-h-screen w-full`}>
      <Layout
        backgroundColorClass={backgroundColorClass}
        setBackgroundColor={setBackgroundColorClass}
      />
    </div>
  );
}

export default App;
