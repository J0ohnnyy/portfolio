import React from 'react';
import ReactDOM from 'react-dom/client';
import GitProfile from './components/gitprofile.tsx';
import { LanguageProvider } from './i18n.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <GitProfile config={CONFIG} />
    </LanguageProvider>
  </React.StrictMode>,
);
