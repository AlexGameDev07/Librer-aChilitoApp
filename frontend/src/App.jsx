import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import WelcomePage from './pages/WelcomePage'
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [dark, setDark] = useState(true);

  React.useEffect(() => {
      document.body.className = dark ? "dark" : "";
  }, [dark]);

  return (
    <>
      <Router>
        <div className={`app${dark ? " dark" : ""}`}>
            <button
                style={{ position: "fixed", top: 16, right: 16, zIndex: 2000 }}
                onClick={() => setDark(d => !d)}
            >
                {dark ? "☀️ Modo claro" : "🌙 Modo oscuro"}
            </button>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
      <Toaster position="bottom-right" />
    </>
  )
}

export default App
