import React from "react";

const List = ({ items, renderItem, emptyText = "No hay elementos." }) => (
    <div>
        {items && items.length > 0 ? (
            items.map((item, idx) => (
                <div key={item.id || idx}>
                    {renderItem(item)}
                </div>
            ))
        ) : (
            <p style={{ color: "#888", textAlign: "center" }}>{emptyText}</p>
        )}
    </div>
);

export default List;