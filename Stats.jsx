import React from "react";

export default function Stats({items}) {
    const num_items=items.length
    const packed=items.filter((items)=>items.packed).length
    const percent=num_items > 0 ? Math.round((packed / num_items) * 100) : 0;
    return(
        <footer className="stats">
            <em>{percent!=100? `💼 You have ${num_items} items in your list and you have already packed ${packed} (${percent}%) of them`:"All set to go ✈"}</em>
        </footer>
    )
}