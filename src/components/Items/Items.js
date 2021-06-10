import React,{ useState } from "react"
import "./Items.css"
import Form from "../Form/Form"

function Items({data, onEditItem, onDelete}){
    const {id, item_name,item_num,image,price,onhand}=data
    const [toggle, setToggle]=useState(false)
    const [selectedItem, setSelectedItem] = useState(data);


    
    function handleUpdateclick(){
        setToggle(!toggle)                
    }
    
    function handleDeleteClick(){
        const obj ={method: "DELETE"}

        fetch(`https://inventory-app-andres-backend.herokuapp.com/inventory/${id}`, obj)
            .then(res => res.json())
            .then(onDelete(data));            
        
    }
    
    function handleChangeForm(name, value) {
        setSelectedItem({
          ...selectedItem,
          [name]: value,
        });
    }
    

    return(
        <div className="col-lg-4 py-3">
            <div className="card">
                <img className="card-img-top py-3 px-3" src={image} alt={item_name}/>
                <div className="card-body">
                    <h5 className="card-title">{item_name}</h5>
                    <p className="card-text">Item Number:{item_num}</p>            
                    <p className="card-text">Price: ${price}</p>
                    <p className="card-text">Quantity: {onhand}</p>                     
                    <button className="btn btn-primary me-2" onClick={handleUpdateclick}>Update</button>
                    <button className="btn btn-primary" onClick={handleDeleteClick}>Delete Item</button>
                    <Form toggle={toggle} item={selectedItem} onChangeForm={handleChangeForm} onEditItem={onEditItem}/>
                </div>          
            </div>
        </div>
    )
}


export default Items;