import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  // Sinaliza que o React carregou para ocultar o conteúdo estático do index.html
  document.body.classList.add('react-loaded');
  
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.log("Static mode: React root element not found. Serving static HTML content.");
}
