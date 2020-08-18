import React from 'react'
import '../css/AddProducts.css';
import Card from '@material-ui/core/Card';


function AddProducts() {


    
    return (
        <div>
            <Card className="product__card_center">
                <h1 className="">Add New Product</h1>
                <form className="col-auto">
                    <label class="sr-only" for="inlineFormInput">Name</label>
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Product Name" />
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Price" />
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Rating" />
                    <input type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Img URL" />
                    <button type="button" onClick="handleSubmit()" className="btn btn-warning">Create Product</button>
                </form>


            </Card>

        </div>
    )
}

export default AddProducts
