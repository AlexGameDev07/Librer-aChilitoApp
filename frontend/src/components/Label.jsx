import React from "react";

const Label = ({children }) => (
    <label
        style={{
            display: "block",
            marginBottom: "6px",
            fontWeight: "bold",
            color: "#333",
            fontSize: "1rem"
        }}
    >
        {children}
    </label>
);

export default Label;