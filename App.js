import React, {Component, Fragment, useState} from 'react';
import PackingList from "./PackingList";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
export default function App(){
    const [items,setItems]=useState([])
    function handlenewitem(item)
    {
        setItems((items)=>{
            return([...items,item])
        })
    }
    function deleteitems(id)
    {
        setItems((items)=>items.filter(item=>item.id!==id))
    }
    function toggle(id){
        setItems((items)=>items.map((item)=>item.id===id?{...item,packed: !item.packed}:item))
    }
    function clear()
    {
        alert('Are you sure')
        setItems([])
    }
    return (
        <Fragment>
            <div className="app">
                <Logo/>
                <Form onAddItems={handlenewitem}/>
                <PackingList items={items} onDeleteItem={deleteitems} onToggleItems={toggle} onClearList={clear}/>
                <Stats items={items}/>
            </div>
        </Fragment>
    )

}
