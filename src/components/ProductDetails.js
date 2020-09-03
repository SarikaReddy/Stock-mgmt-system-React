import React from 'react';
import Table from 'react-bootstrap/Table';
import '../styles/Login.css';
import Modal from 'react-bootstrap/Modal';


class ProductDetails extends React.Component {

    constructor(props){

        super(props);

        const productDetails = [
            { product_id: 1, name: "Lysol", description: "1 unit of floor disinfectant", price: 49, supplier: "A"},
            { product_id: 2, name: "Hand wash", description: "1 unit of hand wash", price: 79, supplier: "A"},
            { product_id: 3, name: "Sanitizer", description: "1 unit of sanitizer", price: 50, supplier: "A"},
            { product_id: 4, name: "Mask", description: "12 pcs of masks", price: 249, supplier: "B"},
            { product_id: 5, name: "Dettol", description: "1 unit of disinfectant", price: 89, supplier: "B"}
        ];

        this.state = {
            productDetails,
            isOpen : false,
            product : {
                product_id : "",
                name : "",
                description : "",
                price : 0,
                supplier : ""
            }
        };

        this.openModal = (id) => {
            
            let x = this.state.productDetails.find( x => x.product_id === id);

            this.setState({ 
                isOpen: true,
                product : x
            });

        } 

        this.closeModal = () => this.setState({ isOpen: false });

        this.addEntry = (event) => {

            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);

            const newValue = {product_id: data.get('product_id'),
                            name: data.get('name'),
                            description: data.get('description'),
                            price: data.get('price'),
                            supplier: data.get('supplier')
            }

            this.setState({
                productDetails : [...this.state.productDetails, newValue]
            })

        }

        this.updateEntry = (event) => {

            event.preventDefault();
            
            const form = event.target;
            const data = new FormData(form);

            const newValue = {product_id: data.get('product_id'),
                            name: data.get('name'),
                            description: data.get('description'),
                            price: data.get('price'),
                            supplier: data.get('supplier')
            }

            this.setState({
                productDetails : [...this.state.productDetails, newValue]
            })
        };

        this.deleteEntry = (id) => {
            this.setState({
                productDetails: this.state.productDetails.filter(item => item.product_id !== id)
            })
        };
    }

    render(){
        return(
            <div>
                <br/>
                <h3>Products Dashboard</h3>
                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Supplier</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       { this.state.productDetails.map((x) => (
                            <tr>
                                <td>{x.product_id}</td>
                                <td>{x.name}</td>
                                <td>{x.description}</td>
                                <td>{x.price}</td>
                                <td>{x.supplier}</td>
                                <td>
                                <button onClick={() => this.openModal(x.product_id)} class="btn btn-primary ml-5">Edit</button>
                                <button onClick={() => this.deleteEntry(x.product_id)} class="btn btn-danger ml-5">Delete</button>
                                </td>
                            </tr>
                       ))}
                    </tbody>
                </Table>
                
                <br/>
                
                <h4>Add Product</h4>

                <form onSubmit={this.addEntry}>
                    <label><b>Product ID: </b></label>
                    <input name="product_id" type="text" placeholder="Enter product ID"/>
                    <label><b>Name: </b></label>
                    <input name="name" type="text" placeholder="Enter product name"/>
                    <label><b>Description: </b></label>
                    <input name="description" type="text" placeholder="Enter description"/>
                    <label><b>Price: </b></label>
                    <input name="price" type="number" placeholder="Enter price"/>
                    <label><b>Supplier: </b></label>
                    <input name="supplier" type="text" placeholder="Enter supplier ID"/>
                    <br/>
                    <br/>
                    <button type="submit" class="btn btn-success ml-5">Add Entry</button>
                </form>

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Entry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit = {this.updateEntry}>
                            <label><b>Product ID: </b></label>
                            <input name="product_id" type="text" placeholder="Enter product ID" defaultValue={this.state.product.product_id} readOnly/>
                            <br/>
                            <label><b>Name: </b></label>
                            <input name="name" type="text" placeholder="Enter product name" defaultValue={this.state.product.name}/>
                            <br/>
                            <label><b>Description: </b></label>
                            <input name="description" type="text" placeholder="Enter description" defaultValue={this.state.product.description}/>
                            <br/>
                            <label><b>Price: </b></label>
                            <input name="price" type="number" placeholder="Enter price" defaultValue={this.state.product.price}/>
                            <br/>
                            <label><b>Supplier: </b></label>
                            <input name="supplier" type="text" placeholder="Enter supplier ID" defaultValue={this.state.product.supplier}/>
                            <br/>
                            <br/>
                            <button type="submit" onClick={() => this.deleteEntry(this.state.product.product_id)} class="btn btn-success ml-5">Update Entry</button>
                        </form>
                    </Modal.Body>
                </Modal>
                    
            </div>
        );
    }
}

export default ProductDetails;