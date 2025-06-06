import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const WelcomePage = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setRedirect(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (redirect) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="welcome-page">
            <div className="welcome-3d-cube">
                <div className="cube">
                    <div className="cube-face front">📚</div>
                    <div className="cube-face back">🚀</div>
                    <div className="cube-face right">✨</div>
                    <div className="cube-face left">📖</div>
                    <div className="cube-face top">🌙</div>
                    <div className="cube-face bottom">🔥</div>
                </div>
            </div>
            <h1>¡Bienvenido a Librería Chilito!</h1>
            <p>Tu viaje lector comienza aquí.</p>
            <p>Serás redirigido al dashboard en unos segundos...</p>
            <p>
                Si no eres redirigido, haz clic{" "}
                <a href="/dashboard">aquí</a>.
            </p>
        </div>
    );
};

export default WelcomePage;