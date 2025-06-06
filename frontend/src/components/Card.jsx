import React from "react";

const Card = ({ children, style, ...props }) => (
    <div className="card" style={style} {...props}>
        {children}
    </div>
);

export default Card;