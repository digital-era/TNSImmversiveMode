import React, { useState } from 'react';
import { Login } from './components/Login';
import { ReportContent } from './components/ReportContent';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <ReportContent />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};

export default App;