import React from "react";

const InputText = ({
    name,
    label,
    placeholder,
    type = "text",
    error,
    ...rest
}) => (
    <div>
        {label && (
            <label
                htmlFor={name}
                style={{
                    display: "block",
                    marginBottom: "6px",
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: "1rem"
                }}
            >
                {label}
            </label>
        )}
        <input
            name={name}
            placeholder={placeholder}
            type={type}
            style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                fontSize: "1rem",
                marginBottom: "8px",
                boxSizing: "border-box"
            }}
            {...rest}
        />
        {error && (
            <p style={{ color: "#e53e3e", fontSize: "0.9rem", margin: 0 }}>{error}</p>
        )}
    </div>
);

export default InputText;