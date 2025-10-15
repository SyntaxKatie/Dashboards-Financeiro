import React from 'react';
import Sidebar from '@/components/Sidebar';

function App() {
  return (
    <div style={{ display: 'flex', position: 'relative' }}>
      <Sidebar />
      <MiniTotalCard valor="R$ 12.500,00" />
      <main style={{ flex: 1 }}>
        <DashboardHeader />
        <div style={{ padding: '20px' }}>
          <h2>Conteúdo do Dashboard</h2>
          <p>Aqui virá a tabela de contas a pagar.</p>
        </div>
      </main>
    </div>
  );
}

export default App;