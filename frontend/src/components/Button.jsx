import React from "react";

const Button = ({ onClick, type = "button", text }) => (
    <button
        type={type}
        onClick={onClick}
        style={{
            backgroundColor: "#4f46e5",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background 0.2s"
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = "#3730a3")}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = "#4f46e5")}
    >
        {text}
    </button>
);

export default Button;
