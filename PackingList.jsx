import React, {Fragment, useState} from "react";

export default function PackingList({items,onDeleteItem,onToggleItems,onClearList}){
    const [sortby,setSortby]=useState("input")
    let sorteditems=items;
    if(sortby==='"input"'){
        sorteditems=items;
    }
    if(sortby==="description"){
        sorteditems=items.slice().sort((a,b)=>a.description.localeCompare(b.description))
    }
    if(sortby==='packed'){
        sorteditems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
    }
    return(
        <div className="list">
            <ul>
                {sorteditems.map((items)=>(
                    <Item itemprop={items} key={items.id} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems}/>
                ))}
            </ul>
            <div className="actions">
                <select value={sortby} onChange={(e)=>setSortby(e.target.value)}>
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    )
}
function Item({itemprop,onDeleteItem,onToggleItems})
{
    return(
        <Fragment>
            <li>
                <input type="checkbox" onChange={()=>onToggleItems(itemprop.id)} checked={itemprop.packed}/>
                <span style={itemprop.packed? {textDecoration:"line-through"}:{} }>{itemprop.quantity} {itemprop.description}</span>
                <button onClick={()=>onDeleteItem(itemprop.id)}>❌</button>
            </li>
        </Fragment>
    )
}