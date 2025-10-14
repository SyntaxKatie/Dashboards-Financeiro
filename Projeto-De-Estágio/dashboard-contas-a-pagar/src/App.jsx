import React from 'react';
import Sidebar from '@/components/Sidebar';



function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ padding: '20px', flex: 1 }}>
        <h1>Bem-vinda, Katiê!</h1>
        <p>Conteúdo principal do dashboard aqui.</p>
      </main>
    </div>
  );
}

export default App;