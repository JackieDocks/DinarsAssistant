import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Привет, Динар!</h1>
      <p>Я — твой ассистент. Готова принять задачи и всё запомнить.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
        <button>Добавить задачу</button>
        <button>Добавить голосом</button>
        <button>Показать план на день</button>
        <button>Очистить все задачи</button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
