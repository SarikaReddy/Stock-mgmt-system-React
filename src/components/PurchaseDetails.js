import React from 'react';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';

class PurchaseDetails extends React.Component {

    constructor(props){
        super(props);

        const purchaseDetails = [
            { order_id: "a",customers_name: "Mohit",product_id: "1",quantity: "2",shipping_address: "Bangalore"},
            { order_id: "b",customers_name: "Rohit",product_id: "4",quantity: 3,shipping_address: "Hyderabad"},
            { order_id: "c",customers_name: "Rohan",product_id: "3",quantity: 1,shipping_address: "Delhi"},
            { order_id: "d",customers_name: "Karthik",product_id: "2",quantity: 4,shipping_address: "Chennai"}
        ];

        this.state = {
            purchaseDetails,
            isOpen : false,
            purchase : {
                order_id : "",
                customers_name : "",
                product_id : "",
                quantity : 0,
                shipping_address : ""
            },
        };
        this.openModal = (id) => {
            
            let x = this.state.purchaseDetails.find( x => x.order_id === id);

            this.setState({ 
                isOpen: true,
                purchase : x
            });

        } 

        this.closeModal = () => this.setState({ isOpen: false });

        this.addEntry = (event) => {
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);

            const newValue = {order_id: data.get('order_id'),
            customers_name: data.get('customers_name'),
            product_id: data.get('product_id'),
            quantity: data.get('quantity'),
            shipping_address: data.get('shipping_address')
            }

            this.setState({
                purchaseDetails : [...this.state.purchaseDetails, newValue]
            })

        }

        this.updateEntry = (event) => {
            
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);

            const newValue = {order_id: data.get('order_id'),
            customers_name: data.get('customers_name'),
            product_id: data.get('product_id'),
            quantity: data.get('quantity'),
            shipping_address: data.get('shipping_address')
            }

            this.setState({
                purchaseDetails : [...this.state.purchaseDetails, newValue]
            })

        };

        this.deleteEntry = (id) => {
            this.setState({
                purchaseDetails: this.state.purchaseDetails.filter(item => item.order_id !== id)
            })
        };

    }

    render(){
        return(
            <div>
                <br/>
                <h3>Purchases Dashboard</h3>
                <br/>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Product ID</th>
                            <th>Quantity</th>
                            <th>Shipping address</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       { this.state.purchaseDetails.map((x) => (
                            <tr>
                                <td>{x.order_id}</td>
                                <td>{x.customers_name}</td>
                                <td>{x.product_id}</td>
                                <td>{x.quantity}</td>
                                <td>{x.shipping_address}</td>
                                <td>
                                <button onClick={() => this.openModal(x.order_id)} class="btn btn-primary ml-5">Edit</button>
                                <button onClick={() => this.deleteEntry(x.order_id)} class="btn btn-danger ml-5">Delete</button>
                                </td>
                            </tr>
                       ))}
                    </tbody>
                </Table>

                <br/>
                
                <h4>Add Purchase Entry</h4>

                <form onSubmit={this.addEntry}>
                    <label><b>Order ID: </b></label>
                    <input name="order_id" type="text" placeholder="Enter order ID"/>
                    <label><b>Customer Name: </b></label>
                    <input name="customers_name" type="text" placeholder="Enter customer name"/>
                    <label><b>Product ID: </b></label>
                    <input name="product_id" type="text" placeholder="Enter product ID"/>
                    <label><b>Quantity: </b></label>
                    <input name="quantity" type="number" placeholder="Enter quantity"/>
                    <br/>
                    <label><b>Shipping Address: </b></label>
                    <input name="shipping_address" type="text" placeholder="Enter shipping address"/>
                    <br/>
                    <br/>
                    <button type="submit" class="btn btn-success ml-5">Add Entry</button>
                </form>

                <Modal show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Entry</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={this.updateEntry}>
                            <label><b>Order ID: </b></label>
                            <input name="order_id" type="text" placeholder="Enter order ID" defaultValue={this.state.purchase.order_id} readOnly/>
                            <br/>
                            <label><b>Customer Name: </b></label>
                            <input name="customers_name" type="text" placeholder="Enter customer name" defaultValue={this.state.purchase.customers_name}/>
                            <br/>
                            <label><b>Product ID: </b></label>
                            <input name="product_id" type="text" placeholder="Enter product ID" defaultValue={this.state.purchase.product_id}/>
                            <br/>
                            <label><b>Quantity: </b></label>
                            <input name="quantity" type="number" placeholder="Enter quantity" defaultValue={this.state.purchase.quantity}/>
                            <br/>
                            <label><b>Shipping Address: </b></label>
                            <input name="shipping_address" type="text" placeholder="Enter shipping address" defaultValue={this.state.purchase.shipping_address}/>
                            <br/>
                            <br/>
                            <button type="submit" onClick={() => this.deleteEntry(this.state.purchase.order_id)} class="btn btn-success ml-5">Update Entry</button>
                        </form>
                    </Modal.Body>
                </Modal>
                
            </div>
        );
    }
}

export default PurchaseDetails;