import React, {useState, useEffect} from "react"
import Items from "../Items/Items"
import NewItem from "../NewItem/NewItem"
import "./ItemsContainer.css"

function ItemsContainer(){
    const [data, setData]=useState([])
    const[showNewItem, setShowNewItem]=useState(false)
    
    
    

    useEffect(()=>{
        fetch('http://localhost:3000/inventory')
            .then(r => r.json())
            .then(setData)
            
    },[])

    function handleEditItem(updatedItem) {
        const updatedItems = data.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
        
        setData(updatedItems);
    }

    function handleDeleteItem(deletedItem){
        const updatedItems = data.filter((item) =>
            deletedItem.id !== item.id
        );

        setData(updatedItems);
    }

    function handleNewItem(NewItem){
        setData([...data, NewItem]);
        setShowNewItem(!showNewItem)
    }

    function handleShowNewItem(){
        setShowNewItem(!showNewItem)
    }
       
    
    const displayItems = data.map((item=>{        
       return <Items key={item.id} data={item} onEditItem={handleEditItem} onDelete={handleDeleteItem}/>
    }))

    return(
        <div className="container">
            <button onClick={handleShowNewItem} className="btn btn-success mt-3">Add New Item</button>
            {showNewItem? <NewItem onNewItem={handleNewItem}/>: null }
            <div className="row">
                {displayItems}
            </div>
            
        </div>
    )
}


export default ItemsContainer;