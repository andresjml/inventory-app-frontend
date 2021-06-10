import React, {useState} from 'react'

function NewItem({onNewItem}) {

    const[formData, setformData]=useState({
        item_name: "",
        item_num: "",
        image: "",
        price: "",
        onhand: ""
    })

    function handleInputChange(event){
        setformData({
            ...formData,
            [event.target.name]:event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault()

        const itemToCreate = {            
            item_name: formData.item_name,
            item_num: formData.item_num,
            image: formData.image,
            price: parseInt(formData.price),
            onhand: parseInt(formData.onhand)
        }

        fetch(`http://localhost:3000/inventory/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemToCreate),
        })
          .then(res => res.json())
          .then(onNewItem);
          
          setformData({
            item_name: "",
            item_num: "",
            image: "",
            price: "",
            onhand: ""
          })
          
    }

    return (
        <div className="row justify-content-start">
            <h1>New Item</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="col-5">
                    Item Name: 
                    <input
                        className="form-control"
                        type="text"
                        name="item_name"
                        value={formData.item_name}
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
                        value={formData.item_num}
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
                        value={formData.image}
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
                        value={formData.price}
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
                        value={formData.onhand}
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
            
        </div>
    )
}

export default NewItem;
