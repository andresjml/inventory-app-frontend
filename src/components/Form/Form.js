import React from "react"
import "./Form.css"

function Form({toggle,item, onChangeForm, onEditItem}){
    

    if (!toggle) return null;

    const {id, item_name, item_num, image, price, onhand}=item

    function handleInputChange(event) {
        onChangeForm(event.target.name, event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault()

        const itemToUpdate = {            
            item_name: item_name,
            item_num: item_num,
            image: image,
            price: parseInt(price),
            onhand: parseInt(onhand)
        }

        fetch(`https://inventory-app-andres-backend.herokuapp.com/inventory/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemToUpdate),
        })
          .then(res => res.json())
          .then(onEditItem);
          
         
    }
    
    return(
        <form onSubmit={handleSubmit} >
            <div className="form-row">
                <div className="col-5 pt-4">
                    Item Name: 
                    <input
                        className="form-control"
                        type="text"
                        name="item_name"
                        value={item_name}
                        placeholder="Item Name"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-5">
                    Item Number:
                    <input
                        className="form-control"
                        type="text"
                        name="item_num"
                        value={item_num}
                        placeholder="Part Number"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-5">
                    Image URL:
                    <input
                        className="form-control"
                        type="text"
                        name="image"
                        value={image}
                        placeholder="Imagen URL"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-5">
                    Price $:
                    <input
                        className="form-control"
                        type="text"
                        name="price"
                        value={price}
                        placeholder="Price"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-5 pb-4">
                    Quantity on hand:
                    <input
                        className="form-control"
                        type="text"
                        name="onhand"
                        value={onhand}
                        placeholder="On Hand"
                        onChange={handleInputChange}
                    />
                </div>
            
                
                
                <div className="col">
                <button type="submit" className="btn btn-success">
                    Submit
                </button>
                </div>
            </div>
        </form>
    );
}

export default Form;